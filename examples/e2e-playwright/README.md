# E2E Playwright Example
Reproducible E2E failures instead of flaky tests.

Use this example when you need to debug a failing end-to-end test with the same data on every run, locally or in CI.

## When to use this example
Use this example if:
- your E2E tests fail intermittently
- failures depend on changing or drifting test data
- rerunning the test makes the failure disappear

This example shows how deterministic test data makes failures reproducible and debuggable.

## Problem
End-to-end tests often fail because the underlying test data changes between runs. This makes failures hard to reproduce and slows down debugging.

## Prerequisites
This repository is a usage example, not a one-click demo.

Before running the test:
1. Create a seed in the TestSeed dashboard (for example: `users-demo`)
2. Set the seed to `mixed` mode with exactly one intentionally invalid field
3. Copy `.env.example` to `.env`
4. Set your API key, seed ID, and API URL

The seed is defined and managed in the TestSeed dashboard. This example only consumes the seed.

## Setup
Install Playwright and run the test:

```bash
npm i -D @playwright/test
npx playwright install
npx playwright test examples/e2e-playwright/tests/e2e.spec.ts
```

## What this example shows
- The same seed produces the same invalid record on every run.
- The same error condition appears consistently.
- E2E failures become reproducible instead of flaky.

## Notes
This example intentionally omits CI retry logic, backoff handling, and rate-limit management. Those topics are covered in the main TestSeed documentation.
The test uses `page.setContent` to simulate a minimal UI. Replace it with your app page in real usage.
