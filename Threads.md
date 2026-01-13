Here are the **7 Thread Skills** formatted as instructions for Claude.

---

### 1. The Base Thread (Standard)

* **Trigger:** "Run a Base Thread on..."
* **Protocol:**
> "Treat this as a standard execution. Your goal is to complete the task in a single continuous context.
> 1. **Plan:** Briefly state your approach.
> 2. **Execute:** Use tools to write code/files.
> 3. **Verify:** Run a quick check (e.g., `Get-Content` or a syntax check) before finishing."
> 
> 



### 2. The P-Thread (Parallel Exploration)

* **Trigger:** "Start a P-Thread [Count] for..."
* **Protocol:**
> "You need to explore multiple solutions simultaneously.
> 1. Create [Count] sub-folders named `exploration_1`, `exploration_2`, etc.
> 2. Inside each, draft a *different* approach to the problem.
> 3. Do **not** overwrite the main source code yet.
> 4. Once drafted, present the pros/cons of each approach to me and ask which one to merge."
> 
> 



### 3. The C-Thread (Chained / Phased)

* **Trigger:** "Start a C-Thread for..."
* **Protocol:**
> "This is a high-stakes or complex task. Break it down into strict sequential phases.
> 1. **Phase 1 (Plan):** Create a detailed `MIGRATION_PLAN.md`. Stop and ask for user approval.
> 2. **Phase 2 (Scaffold):** Create the file structures/interfaces only. Stop and ask for approval.
> 3. **Phase 3 (Implementation):** Fill in the logic. Run tests.
> 4. **Phase 4 (Cleanup):** Delete temporary files.
> **Rule:** You must use `Read-Host 'Press Enter to continue'` (or simply stop and wait for user input) between every phase."
> 
> 



### 4. The F-Thread (Fusion)

* **Trigger:** "Run an F-Thread on..."
* **Protocol:**
> "We need the best possible solution by combining multiple attempts.
> 1. Generate 3 distinct solutions in temporary files: `solution_A.ts`, `solution_B.ts`, `solution_C.ts`.
> * *Variant A:* Focus on performance/speed.
> * *Variant B:* Focus on readability/clean code.
> * *Variant C:* Focus on robustness/error handling.
> 
> 
> 2. Analyze all three files yourself.
> 3. Create a `FINAL_SOLUTION.ts` that cherry-picks the best logic from A, B, and C.
> 4. Delete the temporary variants."
> 
> 



### 5. The B-Thread (Big / Manager)

* **Trigger:** "Start a B-Thread for..."
* **Protocol:**
> "Act as a 'Manager Agent'. Do not write code immediately.
> 1. Create a `TASKS.todo` file breaking the objective into small, checkable items.
> 2. Execute the first item.
> 3. Mark it as [x] in the `TASKS.todo` file.
> 4. Repeat until all tasks are complete.
> 5. **Constraint:** You must update the todo file after every major tool use to track progress."
> 
> 



### 6. The L-Thread (Ralph Loop)

* **Trigger:** "Run an L-Thread / Ralph Loop to fix..."
* **Protocol:**
> "You are entering a self-correcting loop. You must not stop until the verification command passes.
> **The Loop Protocol:**
> 1. **Action:** Attempt to fix the code.
> 2. **Verification:** Immediately run the test command (e.g., `npm test` or specific script).
> 3. **Decision:**
> * If failure: Analyze the error output, hypothesize a fix, and **GOTO 1**.
> * If success: Create a file named `verified.lock` to signal completion and stop.
> **Safety:** If you fail 5 times in a row, stop and ask for human help."
> 
> 
> 
> 



### 7. The Z-Thread (Zero-Touch)

* **Trigger:** "Execute Z-Thread: [Task]"
* **Protocol:**
> "Full autonomy mode.
> 1. Create a new git branch: `git checkout -b auto/z-thread-[timestamp]`.
> 2. Implement the requested feature.
> 3. Run all available tests.
> 4. **Only** if tests pass:
> * `git add .`
> * `git commit -m 'feat: [Task] (Z-Thread Auto-Commit)'`
> 
> 
> 5. If tests fail, revert changes with `git checkout .` and report failure."
> 
> 



---

### Example Usage

Once you have pasted the above into your context/prompt, you simply type:

> "Claude, I'm stuck on this bug. **Run an L-Thread** to fix the `auth.ts` file. Use `npm test auth` as your verification."

Claude will then look up the "L-Thread" protocol in its context and execute the steps (Run -> Test -> Loop) autonomously.