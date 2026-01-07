# deterministic-data-examples
Ready-to-use examples of deterministic mock data for React, Next.js, and Microservices. See how to eliminate flaky tests and sync schemas across your stack using TestSeed. Includes integration guides for Jest, Playwright, and Cypress.

[![Tested with TestSeed](https://img.shields.io/static/v1?label=tested%20with&message=TestSeed&color=00df9a&style=flat-square&logo=gitbook&logoColor=white)](https://testseed.com)

This repository contains focused usage examples. Each example demonstrates one core testing scenario using deterministic data.

## Examples
- `examples/react-jest` - Deterministic Jest tests with seeded user data.
- `examples/e2e-playwright` - Reproducible E2E failure using mixed-mode data.
- `examples/microservice-contract` - Contract tests against a schema-defined seed.

## Local setup (VS Code / Dev)
Option A: `.env` file (recommended)

Create a `.env` in the repo root (or copy `.env.example`):

```bash
cp .env.example .env
```

Set your API key, seed ID, and URL:

```bash
TESTSEED_API_KEY=ts_example_key
TESTSEED_URL=https://testseed.com
TESTSEED_SEED_ID=users-demo
```

The code reads it via:

```ts
process.env.TESTSEED_API_KEY
```

Note: `.env` is already in `.gitignore`, so nothing gets committed.

## Prerequisites
This repository is a usage example, not a one-click demo.

To run it, you need a TestSeed account and a configured seed.

This repository does NOT create seeds automatically.

Before running the tests:
1. Create a seed in the TestSeed dashboard (e.g. `users-demo`)
2. Add a `User` entity with basic fields (id, email, name, status)
3. Copy `.env.example` to `.env`
4. Set your API key, seed ID, and URL
5. Run the tests
