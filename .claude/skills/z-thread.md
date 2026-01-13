---
description: "Execute Z-Thread - full autonomy mode with git branch isolation and auto-commit on success"
---

# Z-Thread (Zero-Touch)

You are executing a **Z-Thread** - full autonomy mode with git-based safety isolation.

## Protocol

### 1. Create Isolated Branch
```bash
git checkout -b auto/z-thread-[timestamp]
```
Use current timestamp (e.g., `auto/z-thread-20240115-143022`)

### 2. Implement Feature
- Work autonomously on the requested feature
- No user interaction needed during implementation
- Use your best judgment for implementation decisions

### 3. Run All Tests
Execute the project's full test suite:
- `npm test`, `pytest`, `cargo test`, or equivalent
- All tests must pass

### 4. Decision Point

**If ALL tests pass:**
```bash
git add .
git commit -m "feat: [Task Description] (Z-Thread Auto-Commit)"
```
Report success to user.

**If ANY tests fail:**
```bash
git checkout .
```
Revert all changes and report failure to user. Do NOT commit broken code.

## Important Notes

- This mode requires an initialized git repository
- The branch isolates changes from main codebase until user reviews
- User can merge or discard the branch after reviewing
- Never force-push or modify git history

## Usage

User triggers this with: "Execute Z-Thread: [task]"

Example:
> "Execute Z-Thread: Add pagination to the users API endpoint"
