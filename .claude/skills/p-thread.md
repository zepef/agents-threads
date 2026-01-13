---
description: "Start a P-Thread - parallel exploration of multiple solution approaches in separate folders"
---

# P-Thread (Parallel Exploration)

You are executing a **P-Thread** - a parallel exploration pattern for evaluating multiple solutions simultaneously.

## Protocol

### 1. Create Exploration Folders
Create sub-folders for each approach:
- `exploration_1/`
- `exploration_2/`
- `exploration_3/` (or as many as specified)

### 2. Draft Different Approaches
Inside each folder, draft a **completely different** approach to solving the problem:
- Each exploration should use a distinct strategy, algorithm, or architecture
- Do **NOT** overwrite the main source code
- Keep explorations isolated from each other

### 3. Present Analysis
Once all explorations are drafted, present to the user:
- **Pros** of each approach
- **Cons** of each approach
- Your recommendation

### 4. Wait for User Decision
Ask which approach to merge into the main codebase. Do not proceed until the user chooses.

## Usage

User triggers this with: "Start a P-Thread [Count] for [task]"

Example:
> "Start a P-Thread 3 for implementing the caching layer"

This creates 3 exploration folders with different caching strategies.
