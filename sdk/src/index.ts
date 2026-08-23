/**
 * Official TypeScript & JavaScript SDK for Seminara AI (seminara.online)
 * Autonomous AI Host for Live Presentations, Demos & Onboarding.
 */

export interface SeminaraClientOptions {
  apiKey?: string
  baseUrl?: string
}

export interface CreateSessionParams {
  title: string
  description?: string
  isLive?: boolean
  ctaText?: string
  ctaUrl?: string
  pdfUrl?: string
  slides?: Array<{
    imageUrl?: string
    textContent?: string
    agentNotes?: string
  }>
  knowledgeBase?: Array<{
    title?: string
    content: string
  }>
}

export interface SessionResponse {
  sessionId: string
  title: string
  status: string
  slug: string
  code: string
  shareLink: string
  liveLink: string
  cta?: { text: string; url: string } | null
  slidesCount: number
  knowledgeBaseCount: number
}

export class Seminara {
  private apiKey: string
  private baseUrl: string

  constructor(options: SeminaraClientOptions = {}) {
    this.apiKey = options.apiKey || process.env.SEMINARA_API_KEY || ''
    this.baseUrl = options.baseUrl || 'https://seminara.online/api/v1'
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${path}`
    const headers = new Headers(options.headers)
    headers.set('Content-Type', 'application/json')
    if (this.apiKey) {
      headers.set('Authorization', `Bearer ${this.apiKey}`)
    }

    const res = await fetch(url, { ...options, headers })
    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({ error: { message: res.statusText } }))
      throw new Error(errorBody.error?.message || `Seminara API error: ${res.status}`)
    }

    return res.json() as Promise<T>
  }

  public sessions = {
    list: async (params?: { limit?: number; cursor?: string }) => {
      const query = new URLSearchParams()
      if (params?.limit) query.set('limit', String(params.limit))
      if (params?.cursor) query.set('cursor', params.cursor)
      const q = query.toString() ? `?${query.toString()}` : ''
      return this.request<{ sessions: SessionResponse[]; pagination: { limit: number; next_cursor: string | null; has_more: boolean } }>(`/agent/sessions${q}`, { method: 'GET' })
    },

    create: async (data: CreateSessionParams, idempotencyKey?: string) => {
      const headers: Record<string, string> = {}
      if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey
      return this.request<SessionResponse>('/agent/sessions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      })
    },

    batchCreate: async (sessions: CreateSessionParams[], idempotencyKey?: string) => {
      const headers: Record<string, string> = {}
      if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey
      return this.request<{ status: string; processed?: number; job_id?: string; poll_url?: string }>('/agent/sessions/batch', {
        method: 'POST',
        headers,
        body: JSON.stringify({ sessions })
      })
    }
  }

  public jobs = {
    get: async (jobId: string) => {
      return this.request<{ job_id: string; status: 'queued' | 'processing' | 'completed' | 'failed'; progress: number; result?: unknown }>(`/jobs/${jobId}`, { method: 'GET' })
    }
  }

  public pricing = {
    get: async () => {
      const res = await fetch('https://seminara.online/api/pricing')
      return res.json()
    }
  }
}

export default Seminara
