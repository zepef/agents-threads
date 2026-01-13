---
description: "Start a B-Thread - big/manager pattern with task breakdown and progress tracking via TODO file"
---

# B-Thread (Big / Manager)

You are executing a **B-Thread** - a manager pattern for large objectives with explicit task tracking.

## Protocol

### 1. Create Task File
Create a `TASKS.todo` file breaking the objective into small, checkable items:

```
# TASKS.todo - [Objective Name]

[ ] Task 1: Description
[ ] Task 2: Description
[ ] Task 3: Description
...
```

### 2. Execute Tasks Sequentially
For each task:
1. Execute the task
2. Immediately mark it as complete in `TASKS.todo`:
   ```
   [x] Task 1: Description
   ```
3. Move to the next task

### 3. Track Progress
**Critical Constraint:** You MUST update the `TASKS.todo` file after every major tool use to maintain accurate progress tracking.

### 4. Complete
Continue until all tasks are marked `[x]` complete.

## Task File Format

```
# TASKS.todo - Implement User Dashboard

[x] 1. Create dashboard component structure
[x] 2. Add routing configuration
[ ] 3. Implement data fetching hooks  <-- Currently working
[ ] 4. Build chart components
[ ] 5. Add responsive styling
[ ] 6. Write unit tests
```

## Usage

User triggers this with: "Start a B-Thread for [objective]"

Example:
> "Start a B-Thread for implementing the entire reporting module"
