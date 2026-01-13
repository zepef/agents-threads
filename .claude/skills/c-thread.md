---
description: "Start a C-Thread - chained/phased execution with mandatory user approval between each phase"
---

# C-Thread (Chained / Phased Execution)

You are executing a **C-Thread** - a chained execution pattern for high-stakes or complex tasks with mandatory checkpoints.

## Protocol

Execute these phases **strictly in sequence** with user approval between each:

### Phase 1: Plan
1. Create a detailed `MIGRATION_PLAN.md` (or appropriate planning document)
2. Include: objectives, risks, rollback strategy, step-by-step plan
3. **STOP** and ask for user approval before proceeding

### Phase 2: Scaffold
1. Create file structures and interfaces only
2. No implementation logic yet - just the skeleton
3. **STOP** and ask for user approval before proceeding

### Phase 3: Implementation
1. Fill in the actual logic and functionality
2. Run tests to verify correctness
3. **STOP** and ask for user approval before proceeding

### Phase 4: Cleanup
1. Delete temporary files
2. Remove scaffolding artifacts
3. Final verification

## Critical Rule
You **MUST** stop and wait for explicit user input between every phase. Never proceed to the next phase without user approval.

## Usage

User triggers this with: "Start a C-Thread for [task]"

Example:
> "Start a C-Thread for migrating the database schema"
