# Microservice Contract Example
Schema-first test data for microservices, without manual mocking.

Use this example when you want to run contract tests against a schema-defined seed without storing or duplicating schemas in the code repository.

## When to use this example
Use this example if:
- your service relies on a schema (OpenAPI / GraphQL) defined elsewhere
- contract tests drift because mocks do not reflect the real schema
- you want services to consume test data from a single source of truth

This example demonstrates a schema-first workflow where the schema lives in the TestSeed dashboard and the code only consumes the resulting seed.

## Problem
Contract tests often drift over time when mocks are manually maintained. As schemas evolve, mocks become outdated, leading to false positives or missed errors.

## Prerequisites
This repository is a usage example, not a one-click demo.

This example assumes:
- a Pro account
- an existing schema-based seed

The schema (OpenAPI or GraphQL) is defined in the TestSeed dashboard. Entities are generated automatically from that schema.

This repository:
- does not define schemas
- does not import schemas
- only consumes the generated seed

Ensure the seed includes a `User` entity with at least the following fields: `email`, `status`.

## Setup
Prepare your environment and run the contract test:

```bash
cp .env.example .env
npm test -- examples/microservice-contract/contract.test.ts
```

## What this example shows
- Contract validation for enum values.
- Email format validation based on schema rules.
- Schema edges highlighted through boundary-valid data.
- No manual mocks and no schema duplication in code.

## Notes
This example focuses on schema consumption and contract validation. Advanced schema management and CI/CD integration are covered in the main TestSeed documentation.
