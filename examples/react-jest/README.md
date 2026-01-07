# React / Jest Example
Deterministic unit and integration tests using seeded test data.

Use this example when you want stable Jest tests for UI logic or data parsing without relying on hand-written mocks or random fixtures.

## When to use this example
Use this example if:
- your Jest tests become flaky over time
- mock data changes between test runs
- snapshot or data-based assertions break unexpectedly

This example shows how deterministic, seeded data keeps Jest tests stable across reruns.

## Problem
Jest tests often rely on manually maintained mocks or randomly generated data. When this data changes between runs, tests become flaky and unreliable.

## Prerequisites
This repository is a usage example, not a one-click demo.

Before running the test:
1. Create a seed in the TestSeed dashboard (for example: `users-demo`)
2. Add a `User` entity with basic fields: `id`, `email`, `name`, `status`
3. Copy `.env.example` to `.env`
4. Set your API key, seed ID, and API URL

The seed is defined and managed in the TestSeed dashboard. This example only consumes the seed.

## Setup
Run the Jest test:

```bash
npx jest examples/react-jest/App.test.tsx
```

## What this example shows
- The same Seed produces the same list length and first record.
- Deterministic assertions stay stable across reruns.
