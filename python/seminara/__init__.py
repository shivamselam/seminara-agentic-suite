"""
Official Python SDK for Seminara AI (seminara.online)
Autonomous AI Host for Live Presentations, Demos & Onboarding.
"""

import os
import httpx
from typing import Optional, Dict, Any, List

class Seminara:
    def __init__(self, api_key: Optional[str] = None, base_url: str = "https://seminara.online/api/v1"):
        self.api_key = api_key or os.environ.get("SEMINARA_API_KEY", "")
        self.base_url = base_url
        self.client = httpx.Client(
            base_url=self.base_url,
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
            }
        )

    def create_session(self, title: str, description: Optional[str] = None, is_live: bool = False, **kwargs) -> Dict[str, Any]:
        payload = {"title": title, "isLive": is_live, **kwargs}
        if description:
            payload["description"] = description
        response = self.client.post("/agent/sessions", json=payload)
        response.raise_for_status()
        return response.json()

    def list_sessions(self, limit: int = 20, cursor: Optional[str] = None) -> Dict[str, Any]:
        params = {"limit": limit}
        if cursor:
            params["cursor"] = cursor
        response = self.client.get("/agent/sessions", params=params)
        response.raise_for_status()
        return response.json()

    def get_pricing(self) -> Dict[str, Any]:
        response = httpx.get("https://seminara.online/api/pricing")
        response.raise_for_status()
        return response.json()

# Alias for backwards compatibility & consistency
SeminaraClient = Seminara

__all__ = ["Seminara", "SeminaraClient"]

