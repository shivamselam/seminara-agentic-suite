# Seminara Go SDK

Official Go client library for [Seminara](https://seminara.online) (`seminara.online`).

## Installation

```bash
go get github.com/shivamselam/seminara-agentic-suite/go
```

## Quickstart

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/shivamselam/seminara-agentic-suite/go"
)

func main() {
	client := seminara.NewClient(os.Getenv("SEMINARA_API_KEY"))

	session, err := client.CreateSession(context.Background(), seminara.CreateSessionRequest{
		Title:  "Q3 Product Launch",
		IsLive: true,
		PdfUrl: "https://example.com/pitch.pdf",
	})
	if err != nil {
		panic(err)
	}

	fmt.Printf("Session created: %s\n", session.SessionID)
	fmt.Printf("Live room link: %s\n", session.ShareLink)
}
```

## License
MIT
