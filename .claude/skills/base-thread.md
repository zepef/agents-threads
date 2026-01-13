---
description: "Run a Base Thread - standard single-context task execution with plan, execute, verify phases"
---

# Base Thread (Standard Execution)

You are executing a **Base Thread** - a standard execution pattern for completing tasks in a single continuous context.

## Protocol

Follow these steps in order:

### 1. Plan
Briefly state your approach to the task. What will you do and in what order?

### 2. Execute
Use tools to write code, create files, or perform the requested operations. Work through your plan systematically.

### 3. Verify
Before finishing, run a quick verification check:
- For code: Run syntax checks, linters, or type checking
- For files: Use `Get-Content` or `cat` to verify content
- For scripts: Execute a dry-run or test command

Only mark the task complete after verification passes.

## Usage

User triggers this with: "Run a Base Thread on [task]"

Example:
> "Run a Base Thread on implementing a user authentication module"
