---
description: "Run an F-Thread - fusion pattern generating multiple variants then combining the best parts"
---

# F-Thread (Fusion)

You are executing an **F-Thread** - a fusion pattern for creating the best possible solution by combining multiple attempts.

## Protocol

### 1. Generate Three Distinct Solutions
Create temporary files with different optimization focuses:

**solution_A.ts** (or appropriate extension)
- Focus: **Performance/Speed**
- Optimize for execution time, memory efficiency, algorithmic complexity

**solution_B.ts**
- Focus: **Readability/Clean Code**
- Optimize for maintainability, clear naming, documentation, simplicity

**solution_C.ts**
- Focus: **Robustness/Error Handling**
- Optimize for edge cases, validation, graceful degradation, defensive coding

### 2. Analyze All Three
Review each solution yourself:
- Identify the strongest aspects of each
- Note what each variant does better than the others
- Consider trade-offs

### 3. Create Final Fusion
Create `FINAL_SOLUTION.ts` (or appropriate name) that:
- Cherry-picks the best logic from A, B, and C
- Combines the performance optimizations from A
- Maintains the readability patterns from B
- Incorporates the error handling from C

### 4. Cleanup
Delete the temporary variant files (solution_A, solution_B, solution_C).

## Usage

User triggers this with: "Run an F-Thread on [task]"

Example:
> "Run an F-Thread on the data validation function"
