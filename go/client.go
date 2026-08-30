package seminara

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Client struct {
	APIKey     string
	BaseURL    string
	HTTPClient *http.Client
}

func NewClient(apiKey string) *Client {
	if apiKey == "" {
		apiKey = os.Getenv("SEMINARA_API_KEY")
	}
	return &Client{
		APIKey:     apiKey,
		BaseURL:    "https://seminara.online/api/v1",
		HTTPClient: &http.Client{},
	}
}

type CreateSessionRequest struct {
	Title       string `json:"title"`
	Description string `json:"description,omitempty"`
	IsLive      bool   `json:"isLive,omitempty"`
	CtaText     string `json:"ctaText,omitempty"`
	CtaURL      string `json:"ctaUrl,omitempty"`
	PdfURL      string `json:"pdfUrl,omitempty"`
}

type SessionResponse struct {
	SessionID string `json:"sessionId"`
	Title     string `json:"title"`
	Status    string `json:"status"`
	ShareLink string `json:"shareLink"`
}

func (c *Client) CreateSession(req CreateSessionRequest) (*SessionResponse, error) {
	return c.CreateSessionWithContext(context.Background(), req)
}

func (c *Client) CreateSessionWithContext(ctx context.Context, req CreateSessionRequest) (*SessionResponse, error) {
	body, err := json.Marshal(req)
	if err != nil {
		return nil, err
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", c.BaseURL+"/agent/sessions", bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", "Bearer "+c.APIKey)

	resp, err := c.HTTPClient.Do(httpReq)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 400 {
		return nil, fmt.Errorf("seminara api error: status %d", resp.StatusCode)
	}

	var sessionResp SessionResponse
	if err := json.NewDecoder(resp.Body).Decode(&sessionResp); err != nil {
		return nil, err
	}

	return &sessionResp, nil
}
