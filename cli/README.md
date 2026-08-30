<div align="center">
  <h1>Seminara CLI</h1>
  <p><strong>Command-line interface for the Seminara AI Presentation Engine.</strong></p>

  [![NPM Version](https://img.shields.io/npm/v/seminara-cli.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/seminara-cli)
  [![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](./LICENSE)
  
  <br />
  <a href="https://seminara.online/live/demo"><strong>View Live Presentation Demo »</strong></a>
  ·
  <a href="https://seminara.online/docs/api-overview"><strong>API Reference »</strong></a>
  <br />
  <br />
</div>

## Overview

The **Seminara CLI** (`seminara`) lets you orchestrate autonomous AI presentation sessions directly from your terminal or CI/CD pipelines.

---

## 📦 Installation

Run directly with `npx`:
```bash
npx seminara-cli --help
```

Or install globally:
```bash
npm install -g seminara-cli
```

---

## ⚡ Quickstart

### 1. Set Environment Variable
```bash
export SEMINARA_API_KEY="sk_live_..."
```

### 2. Create a Session
```bash
seminara create --title "Q3 Enterprise Demo"
```

### 3. List Sessions
```bash
seminara list
```

### 4. Query Pricing & Quotas
```bash
seminara pricing
```

---

## 📄 License
MIT License. Created by [Omni AI Club Private Limited](https://omniai.club).
