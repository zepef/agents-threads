---
description: "Run an L-Thread / Ralph Loop - self-correcting loop that continues until verification passes"
---

# L-Thread (Ralph Loop)

You are executing an **L-Thread** - a self-correcting loop that does not stop until the verification command passes.

## Protocol

### The Loop

```
┌─────────────────────────────────────────┐
│  1. ACTION: Attempt to fix the code     │
│                  ↓                      │
│  2. VERIFY: Run the test command        │
│                  ↓                      │
│  3. DECISION:                           │
│     ├─ FAIL → Analyze error, GOTO 1     │
│     └─ PASS → Create verified.lock      │
└─────────────────────────────────────────┘
```

### Step Details

**1. Action**
- Analyze the current state
- Hypothesize what needs to change
- Make the fix

**2. Verification**
- Immediately run the specified test command (e.g., `npm test`, `pytest`, etc.)
- Capture the output

**3. Decision**
- **If FAILURE:**
  - Parse the error output
  - Identify the root cause
  - Formulate a new hypothesis
  - Return to Step 1
- **If SUCCESS:**
  - Create a file named `verified.lock` to signal completion
  - Stop the loop

### Safety Limit
If you fail **5 times in a row**, stop and ask for human help. Do not continue indefinitely without intervention.

## Usage

User triggers this with: "Run an L-Thread to fix [target]" or "Run a Ralph Loop to fix [target]"

Specify the verification command:

Example:
> "Run an L-Thread to fix the auth.ts file. Use `npm test auth` as your verification."
