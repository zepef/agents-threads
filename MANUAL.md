# Agents Threads — User Manual

This manual provides comprehensive documentation for each thread type, including detailed workflows, use cases, examples, and best practices.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Base Thread](#1-base-thread)
3. [P-Thread (Parallel)](#2-p-thread-parallel-exploration)
4. [C-Thread (Chained)](#3-c-thread-chained--phased)
5. [F-Thread (Fusion)](#4-f-thread-fusion)
6. [B-Thread (Big/Manager)](#5-b-thread-big--manager)
7. [L-Thread (Ralph Loop)](#6-l-thread-ralph-loop)
8. [Z-Thread (Zero-Touch)](#7-z-thread-zero-touch)
9. [Combining Threads](#combining-threads)
10. [Troubleshooting](#troubleshooting)

---

## Introduction

### What Are Threads?

Threads are **execution patterns** — predefined workflows that tell Claude *how* to approach a task. Instead of giving Claude free reign, you specify a methodology that matches your task's requirements.

### Why Use Threads?

| Problem | Thread Solution |
|---------|----------------|
| Claude goes off on tangents | Base Thread enforces Plan→Execute→Verify |
| Unsure which approach is best | P-Thread explores multiple options |
| Risky changes need oversight | C-Thread requires approval at each phase |
| Need optimal code quality | F-Thread generates and fuses best variants |
| Large task lacks structure | B-Thread breaks it into trackable items |
| Bug won't stay fixed | L-Thread loops until tests pass |
| Want hands-off automation | Z-Thread handles everything with git safety |

### How to Invoke

Simply use the trigger phrase in your message to Claude:

```
"Run a Base Thread on implementing the user login form"
```

Claude recognizes the trigger and follows the corresponding protocol.

---

## 1. Base Thread

### Overview
The foundational execution pattern. Provides structure without complexity.

### Trigger
```
"Run a Base Thread on [task description]"
```

### Workflow

```
┌─────────────┐
│   1. PLAN   │  State your approach clearly
└──────┬──────┘
       ↓
┌─────────────┐
│  2. EXECUTE │  Perform the actual work
└──────┬──────┘
       ↓
┌─────────────┐
│  3. VERIFY  │  Confirm correctness
└─────────────┘
```

### Detailed Steps

**Phase 1: Plan**
- Claude states what it will do
- Identifies files to modify
- Outlines the approach
- Sets expectations

**Phase 2: Execute**
- Creates/modifies code
- Uses appropriate tools
- Follows the stated plan
- Makes incremental progress

**Phase 3: Verify**
- Runs syntax checks or linters
- Executes relevant tests
- Reads back created files
- Confirms the task is complete

### When to Use

✅ **Good for:**
- Simple bug fixes
- Adding small features
- File modifications
- Straightforward refactoring
- Tasks with clear requirements

❌ **Not ideal for:**
- Complex multi-phase work (use C-Thread)
- Uncertain approaches (use P-Thread)
- Large projects (use B-Thread)

### Examples

**Example 1: Simple Function**
```
Run a Base Thread on creating a utility function that formats phone numbers
```

**Example 2: Bug Fix**
```
Run a Base Thread on fixing the null pointer exception in UserService.java
```

**Example 3: File Update**
```
Run a Base Thread on updating the configuration file to use the new API endpoint
```

---

## 2. P-Thread (Parallel Exploration)

### Overview
Explores multiple solution approaches simultaneously, keeping them isolated until you choose.

### Trigger
```
"Start a P-Thread [count] for [task description]"
```

### Workflow

```
┌────────────────────────────────────────────────┐
│              CREATE EXPLORATIONS               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ explore_1│ │ explore_2│ │ explore_3│  ...  │
│  │ Approach │ │ Approach │ │ Approach │       │
│  │    A     │ │    B     │ │    C     │       │
│  └──────────┘ └──────────┘ └──────────┘       │
└────────────────────┬───────────────────────────┘
                     ↓
┌────────────────────────────────────────────────┐
│              PRESENT ANALYSIS                  │
│  • Pros/Cons of each approach                  │
│  • Recommendation                              │
└────────────────────┬───────────────────────────┘
                     ↓
┌────────────────────────────────────────────────┐
│           WAIT FOR USER DECISION               │
│  → User selects which approach to merge        │
└────────────────────────────────────────────────┘
```

### Detailed Steps

**Step 1: Create Exploration Folders**
- Creates `exploration_1/`, `exploration_2/`, etc.
- Each folder is completely isolated
- Main source code remains untouched

**Step 2: Draft Different Approaches**
Each exploration uses a fundamentally different strategy:
- Different algorithms
- Different architectures
- Different libraries
- Different design patterns

**Step 3: Present Analysis**
Claude provides for each approach:
- **Pros**: What this approach does well
- **Cons**: Drawbacks and limitations
- **Trade-offs**: What you gain/lose
- **Recommendation**: Claude's suggested choice

**Step 4: Await Decision**
- Claude does NOT proceed without your input
- You review the options
- You select which to merge (or none)

### When to Use

✅ **Good for:**
- Architecture decisions
- Library selection
- Algorithm comparison
- Design pattern choices
- Any "which way should we go?" question

❌ **Not ideal for:**
- Simple tasks with obvious solutions
- Time-sensitive fixes
- Tasks requiring immediate action

### Examples

**Example 1: Caching Strategy**
```
Start a P-Thread 3 for implementing caching in the API layer
```
Creates three approaches: Redis, in-memory, and file-based caching.

**Example 2: UI Component**
```
Start a P-Thread 2 for building the data table component
```
Creates two approaches: custom implementation vs. using a library.

**Example 3: Authentication**
```
Start a P-Thread 3 for implementing user authentication
```
Creates three approaches: JWT, sessions, and OAuth.

### Output Structure

```
project/
├── exploration_1/
│   ├── README.md          # Approach description
│   └── [implementation]   # The actual code
├── exploration_2/
│   ├── README.md
│   └── [implementation]
└── exploration_3/
    ├── README.md
    └── [implementation]
```

---

## 3. C-Thread (Chained / Phased)

### Overview
For high-stakes work requiring human approval at every phase. Maximum control and oversight.

### Trigger
```
"Start a C-Thread for [task description]"
```

### Workflow

```
┌─────────────────────────────────────┐
│  PHASE 1: PLAN                      │
│  Create MIGRATION_PLAN.md           │
│  ─────────────────────────────────  │
│  ⏸️  STOP - Await user approval     │
└──────────────────┬──────────────────┘
                   ↓ [User approves]
┌─────────────────────────────────────┐
│  PHASE 2: SCAFFOLD                  │
│  Create file structures/interfaces  │
│  ─────────────────────────────────  │
│  ⏸️  STOP - Await user approval     │
└──────────────────┬──────────────────┘
                   ↓ [User approves]
┌─────────────────────────────────────┐
│  PHASE 3: IMPLEMENT                 │
│  Fill in logic, run tests           │
│  ─────────────────────────────────  │
│  ⏸️  STOP - Await user approval     │
└──────────────────┬──────────────────┘
                   ↓ [User approves]
┌─────────────────────────────────────┐
│  PHASE 4: CLEANUP                   │
│  Remove temporary files             │
│  Final verification                 │
└─────────────────────────────────────┘
```

### Detailed Phases

**Phase 1: Plan**
Creates a detailed planning document including:
- Objectives and scope
- Risk assessment
- Rollback strategy
- Step-by-step plan
- Dependencies identified

*Claude stops and waits for your "proceed" or "approved"*

**Phase 2: Scaffold**
Creates structure without implementation:
- Directory structure
- Empty files with interfaces
- Type definitions
- Configuration shells

*Claude stops and waits for approval*

**Phase 3: Implementation**
Fills in the actual functionality:
- Business logic
- Data handling
- Error handling
- Runs tests to verify

*Claude stops and waits for approval*

**Phase 4: Cleanup**
Finalizes the work:
- Removes temporary/scaffold files
- Cleans up comments
- Final verification
- Summary of changes

### When to Use

✅ **Good for:**
- Database migrations
- API breaking changes
- Security implementations
- Production deployments
- Regulatory/compliance work
- Any irreversible changes

❌ **Not ideal for:**
- Quick fixes
- Exploratory work
- Low-risk changes

### Examples

**Example 1: Database Migration**
```
Start a C-Thread for migrating from MySQL to PostgreSQL
```

**Example 2: API Versioning**
```
Start a C-Thread for introducing API v2 with breaking changes
```

**Example 3: Auth System**
```
Start a C-Thread for replacing the authentication system
```

### Approval Responses

Claude recognizes these as approval to proceed:
- "Approved"
- "Proceed"
- "Continue"
- "Go ahead"
- "Looks good"
- "LGTM"

---

## 4. F-Thread (Fusion)

### Overview
Generates three solution variants optimized for different qualities, then intelligently combines them.

### Trigger
```
"Run an F-Thread on [task description]"
```

### Workflow

```
┌─────────────────────────────────────────────────────┐
│            GENERATE THREE VARIANTS                  │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│  │ solution_A  │ │ solution_B  │ │ solution_C  │   │
│  │ ─────────── │ │ ─────────── │ │ ─────────── │   │
│  │ PERFORMANCE │ │ READABILITY │ │ ROBUSTNESS  │   │
│  │ • Speed     │ │ • Clean     │ │ • Error     │   │
│  │ • Memory    │ │ • Simple    │ │   handling  │   │
│  │ • Algorithm │ │ • Maintain  │ │ • Edge      │   │
│  └─────────────┘ └─────────────┘ └─────────────┘   │
└─────────────────────────┬───────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                  ANALYZE ALL THREE                  │
│  • Identify strongest aspects of each               │
│  • Note trade-offs                                  │
└─────────────────────────┬───────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                 CREATE FUSION                       │
│  FINAL_SOLUTION = Best of A + B + C                 │
└─────────────────────────┬───────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                    CLEANUP                          │
│  Delete solution_A, solution_B, solution_C          │
└─────────────────────────────────────────────────────┘
```

### Variant Focus Areas

**Solution A — Performance**
- Algorithmic efficiency (O(n) vs O(n²))
- Memory optimization
- Caching strategies
- Lazy evaluation
- Minimal allocations

**Solution B — Readability**
- Clear naming conventions
- Self-documenting code
- Logical structure
- Appropriate abstraction
- Easy to understand

**Solution C — Robustness**
- Comprehensive error handling
- Input validation
- Edge case coverage
- Graceful degradation
- Defensive coding

### When to Use

✅ **Good for:**
- Core business logic
- Frequently-used utilities
- Performance-critical code
- Public APIs
- Shared libraries

❌ **Not ideal for:**
- Throwaway scripts
- Quick prototypes
- Simple CRUD operations

### Examples

**Example 1: Data Processor**
```
Run an F-Thread on the data transformation pipeline
```

**Example 2: API Client**
```
Run an F-Thread on the HTTP client wrapper
```

**Example 3: Validation**
```
Run an F-Thread on the input validation module
```

### Output

The final `FINAL_SOLUTION` file contains:
- Performance optimizations from A
- Clean structure from B
- Error handling from C
- Best patterns cherry-picked from all three

---

## 5. B-Thread (Big / Manager)

### Overview
Project management pattern for large objectives. Maintains explicit task tracking.

### Trigger
```
"Start a B-Thread for [objective]"
```

### Workflow

```
┌─────────────────────────────────────┐
│    CREATE TASKS.todo FILE           │
│    Break objective into items       │
└──────────────────┬──────────────────┘
                   ↓
┌─────────────────────────────────────┐
│    EXECUTE TASK 1                   │
│    Mark [x] when complete           │
└──────────────────┬──────────────────┘
                   ↓
┌─────────────────────────────────────┐
│    EXECUTE TASK 2                   │
│    Mark [x] when complete           │
└──────────────────┬──────────────────┘
                   ↓
              ... repeat ...
                   ↓
┌─────────────────────────────────────┐
│    ALL TASKS COMPLETE               │
│    Objective achieved               │
└─────────────────────────────────────┘
```

### The TASKS.todo File

```markdown
# TASKS.todo - Implement E-commerce Cart

[x] 1. Create Cart model and database schema
[x] 2. Implement addItem endpoint
[x] 3. Implement removeItem endpoint
[ ] 4. Add quantity update functionality  <-- Currently working
[ ] 5. Implement cart persistence (localStorage)
[ ] 6. Add price calculation with discounts
[ ] 7. Create cart summary component
[ ] 8. Write unit tests
[ ] 9. Write integration tests
[ ] 10. Update API documentation
```

### Key Rules

1. **Always update after each task** — The file reflects real-time progress
2. **One task at a time** — Complete before moving to next
3. **Granular tasks** — Each should be completable in one focused session
4. **Clear descriptions** — Anyone should understand what the task means

### When to Use

✅ **Good for:**
- Multi-day features
- Team handoffs (task file provides context)
- Complex refactoring
- Learning new codebases
- Any work spanning 5+ distinct steps

❌ **Not ideal for:**
- Quick fixes
- Simple changes
- Urgent work

### Examples

**Example 1: Full Feature**
```
Start a B-Thread for implementing the user notification system
```

**Example 2: Refactoring**
```
Start a B-Thread for migrating from REST to GraphQL
```

**Example 3: Test Coverage**
```
Start a B-Thread for achieving 80% test coverage on the auth module
```

### Progress Visibility

At any point, you can check `TASKS.todo` to see:
- What's been completed
- What's in progress
- What remains
- Overall progress percentage

---

## 6. L-Thread (Ralph Loop)

### Overview
Self-correcting debugging loop. Continues attempting fixes until verification passes.

### Trigger
```
"Run an L-Thread to fix [target]. Use [command] as verification."
```

### Workflow

```
     ┌──────────────────────────────────┐
     │                                  │
     ↓                                  │
┌─────────────┐                         │
│  1. ACTION  │ Analyze & attempt fix   │
└──────┬──────┘                         │
       ↓                                │
┌─────────────┐                         │
│  2. VERIFY  │ Run test command        │
└──────┬──────┘                         │
       ↓                                │
┌─────────────┐     FAIL                │
│ 3. DECISION │─────────────────────────┘
└──────┬──────┘
       │ PASS
       ↓
┌─────────────┐
│   SUCCESS   │ Create verified.lock
└─────────────┘
```

### Detailed Steps

**Step 1: Action**
- Read current code state
- Analyze error messages
- Form hypothesis about the fix
- Implement the change

**Step 2: Verify**
- Execute the specified verification command
- Capture stdout and stderr
- Parse the results

**Step 3: Decision**
- **PASS**: All tests pass → Create `verified.lock` → Stop
- **FAIL**: Tests fail → Analyze new errors → Return to Step 1

### Safety Mechanism

After **5 consecutive failures**, Claude:
1. Stops the loop
2. Summarizes what was attempted
3. Asks for human guidance
4. Does NOT continue without input

This prevents infinite loops on unsolvable problems.

### When to Use

✅ **Good for:**
- Flaky tests
- Type errors
- Linting issues
- "It should work but doesn't"
- Automated CI fixes

❌ **Not ideal for:**
- Unclear requirements
- Missing dependencies
- Environmental issues
- Problems requiring design changes

### Examples

**Example 1: Test Fix**
```
Run an L-Thread to fix the auth tests. Use `npm test auth` as verification.
```

**Example 2: Type Errors**
```
Run an L-Thread to fix UserService.ts. Use `tsc --noEmit` as verification.
```

**Example 3: Linting**
```
Run an L-Thread to fix linting errors. Use `eslint src/ --max-warnings=0` as verification.
```

### Output Files

On success, creates `verified.lock`:
```
VERIFIED
Timestamp: 2024-01-15T14:30:22Z
Iterations: 3
Final verification: npm test auth
Status: PASS
```

---

## 7. Z-Thread (Zero-Touch)

### Overview
Full autonomy mode with git-based safety. Claude works independently and only commits if tests pass.

### Trigger
```
"Execute Z-Thread: [task description]"
```

### Workflow

```
┌─────────────────────────────────────────┐
│  1. CREATE BRANCH                       │
│     git checkout -b auto/z-thread-...   │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  2. IMPLEMENT                           │
│     Work autonomously on feature        │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  3. TEST                                │
│     Run full test suite                 │
└──────────────────┬──────────────────────┘
                   ↓
           ┌──────┴──────┐
           │  ALL PASS?  │
           └──────┬──────┘
          YES     │     NO
           ↓      │      ↓
┌──────────────┐  │  ┌──────────────┐
│ git add .    │  │  │ git checkout │
│ git commit   │  │  │ Report fail  │
│ Report OK    │  │  └──────────────┘
└──────────────┘  │
```

### Prerequisites

- **Git repository** must be initialized
- **Test suite** must exist and be runnable
- **Clean working directory** recommended

### Branch Naming

Format: `auto/z-thread-[YYYYMMDD-HHMMSS]`

Example: `auto/z-thread-20240115-143022`

### Commit Message

Format: `feat: [Task Description] (Z-Thread Auto-Commit)`

Example: `feat: Add pagination to users API (Z-Thread Auto-Commit)`

### When to Use

✅ **Good for:**
- Well-defined features
- Clear acceptance criteria
- Tasks within Claude's capabilities
- Non-critical branches
- Experimental work

❌ **Not ideal for:**
- Production hotfixes
- Unclear requirements
- Tasks needing human judgment
- Non-git projects

### Examples

**Example 1: Feature**
```
Execute Z-Thread: Add email validation to the registration form
```

**Example 2: Refactor**
```
Execute Z-Thread: Convert UserController to async/await
```

**Example 3: Tests**
```
Execute Z-Thread: Add unit tests for the CartService
```

### After Completion

**On Success:**
- Branch contains your changes
- Review with `git diff main`
- Merge if satisfied: `git merge auto/z-thread-...`

**On Failure:**
- Changes reverted
- Error report provided
- Main branch untouched

---

## Combining Threads

Threads can be combined for complex workflows:

### P-Thread → C-Thread
First explore options, then implement chosen one with approval gates:
```
1. "Start a P-Thread 3 for the new auth system"
2. [Review explorations, choose one]
3. "Start a C-Thread to implement exploration_2"
```

### B-Thread → L-Thread
Use B-Thread for planning, L-Thread for each fix:
```
1. "Start a B-Thread for fixing all test failures"
2. [Creates TASKS.todo with each failing test]
3. "Run an L-Thread to fix auth.test.ts. Use npm test auth as verification."
```

### F-Thread → Z-Thread
Generate optimal code, then auto-implement:
```
1. "Run an F-Thread on the caching module"
2. [Creates FINAL_SOLUTION.ts]
3. "Execute Z-Thread: Integrate FINAL_SOLUTION into the main codebase"
```

---

## Troubleshooting

### Thread Not Recognized
**Problem:** Claude doesn't follow the thread pattern.
**Solution:** Use exact trigger phrase format.

### C-Thread Continues Without Approval
**Problem:** Claude proceeds without waiting.
**Solution:** Explicitly state "wait for my approval before each phase."

### L-Thread Loops Infinitely
**Problem:** Doesn't stop after 5 failures.
**Solution:** Remind Claude of the 5-failure safety limit.

### Z-Thread Fails on Clean Repo
**Problem:** "Not a git repository" error.
**Solution:** Run `git init` first.

### P-Thread Creates Too Many Folders
**Problem:** Creates more explorations than requested.
**Solution:** Specify exact count: "P-Thread 2" not "P-Thread".

---

## Quick Reference Card

| Thread | Trigger | Creates | Requires |
|--------|---------|---------|----------|
| Base | `Run a Base Thread on...` | — | — |
| P | `Start a P-Thread N for...` | `exploration_N/` folders | User selection |
| C | `Start a C-Thread for...` | `MIGRATION_PLAN.md` | Approval each phase |
| F | `Run an F-Thread on...` | `FINAL_SOLUTION.*` | — |
| B | `Start a B-Thread for...` | `TASKS.todo` | — |
| L | `Run an L-Thread to fix...` | `verified.lock` | Test command |
| Z | `Execute Z-Thread: ...` | Git branch | Git repo |

---

*End of Manual*
