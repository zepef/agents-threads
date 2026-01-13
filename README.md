# 🧵 Agents Threads

A Claude Code plugin providing **7 specialized execution patterns** (threads) for different types of software engineering tasks. Each thread implements a distinct workflow optimized for specific scenarios.

## Why Threads?

When working with AI coding assistants, different tasks require different approaches:

- **Simple bug fixes** need quick iteration loops
- **Complex migrations** need phased approval checkpoints
- **Design decisions** benefit from parallel exploration
- **Large features** need task breakdown and tracking

**Agents Threads** gives you precise control over *how* Claude approaches your task, not just *what* it does.

## Installation

### Option 1: Clone and Link
```bash
git clone https://github.com/YOUR_USERNAME/agents-threads.git
# Add the path to your Claude Code plugin settings
```

### Option 2: Direct Plugin Reference
Add to your Claude Code settings:
```json
{
  "plugins": ["path/to/agents-threads"]
}
```

## Quick Reference

| Thread | Trigger Phrase | Best For |
|--------|---------------|----------|
| **Base** | `Run a Base Thread on...` | Standard tasks |
| **P-Thread** | `Start a P-Thread [N] for...` | Exploring options |
| **C-Thread** | `Start a C-Thread for...` | High-stakes changes |
| **F-Thread** | `Run an F-Thread on...` | Optimal solutions |
| **B-Thread** | `Start a B-Thread for...` | Large projects |
| **L-Thread** | `Run an L-Thread to fix...` | Debugging loops |
| **Z-Thread** | `Execute Z-Thread: [task]` | Full autonomy |

## The 7 Threads

### 🔵 Base Thread — Standard Execution
**Trigger:** `"Run a Base Thread on [task]"`

The foundation pattern. Simple three-phase execution:
1. **Plan** — State the approach
2. **Execute** — Do the work
3. **Verify** — Confirm it works

**Use when:** You have a straightforward task that doesn't need special handling.

---

### 🟣 P-Thread — Parallel Exploration
**Trigger:** `"Start a P-Thread [count] for [task]"`

Explores multiple solutions simultaneously in isolated folders.

**Use when:**
- You're unsure which approach is best
- You want to compare different architectures
- Design decisions have trade-offs you want to evaluate

**Example:**
```
Start a P-Thread 3 for implementing the caching layer
```
Creates `exploration_1/`, `exploration_2/`, `exploration_3/` with different strategies.

---

### 🟡 C-Thread — Chained Phases
**Trigger:** `"Start a C-Thread for [task]"`

Sequential phases with **mandatory user approval** between each:
1. **Plan** → *approval required*
2. **Scaffold** → *approval required*
3. **Implement** → *approval required*
4. **Cleanup**

**Use when:**
- Database migrations
- Breaking API changes
- Security-sensitive modifications
- Any change where mistakes are costly

---

### 🟠 F-Thread — Fusion
**Trigger:** `"Run an F-Thread on [task]"`

Generates three variants optimized for different qualities, then combines the best of each:

| Variant | Focus |
|---------|-------|
| **A** | Performance & Speed |
| **B** | Readability & Clean Code |
| **C** | Robustness & Error Handling |

**Use when:**
- Writing critical functions
- Code that needs to be both fast AND maintainable
- You want the "best of all worlds"

---

### 🔴 B-Thread — Big/Manager
**Trigger:** `"Start a B-Thread for [objective]"`

Breaks large objectives into tracked tasks via `TASKS.todo` file:
```
# TASKS.todo - Implement Auth System

[x] 1. Create user model
[x] 2. Add password hashing
[ ] 3. Implement JWT tokens  <-- in progress
[ ] 4. Build login endpoint
[ ] 5. Add session management
[ ] 6. Write tests
```

**Use when:**
- Multi-day features
- Complex refactoring
- Any work spanning multiple files/systems

---

### 🟢 L-Thread — Ralph Loop
**Trigger:** `"Run an L-Thread to fix [target]. Use [command] as verification."`

A self-correcting loop that **doesn't stop until tests pass**:

```
┌──────────────────────────┐
│  1. Attempt fix          │
│         ↓                │
│  2. Run verification     │
│         ↓                │
│  3. Pass? → Done         │
│     Fail? → Back to 1    │
└──────────────────────────┘
```

**Safety:** Stops after 5 consecutive failures to ask for help.

**Use when:**
- Stubborn bugs
- Test failures you want fixed automatically
- "Just make it work" scenarios

**Example:**
```
Run an L-Thread to fix auth.ts. Use `npm test auth` as verification.
```

---

### ⚫ Z-Thread — Zero-Touch Autonomy
**Trigger:** `"Execute Z-Thread: [task]"`

Full autonomous mode with git safety:
1. Creates isolated branch: `auto/z-thread-[timestamp]`
2. Implements feature independently
3. Runs all tests
4. **Only commits if tests pass** (reverts otherwise)

**Use when:**
- You trust the AI's judgment
- Task is well-defined
- You want hands-off execution
- Git safety net is acceptable

**Requires:** Initialized git repository

---

## Choosing the Right Thread

```
Is this a simple, well-defined task?
├─ Yes → Base Thread
└─ No ↓

Do you need to explore multiple approaches?
├─ Yes → P-Thread
└─ No ↓

Is this high-stakes / needs approval gates?
├─ Yes → C-Thread
└─ No ↓

Do you need optimal code quality?
├─ Yes → F-Thread
└─ No ↓

Is this a large, multi-part objective?
├─ Yes → B-Thread
└─ No ↓

Are you fixing a bug with clear test criteria?
├─ Yes → L-Thread
└─ No ↓

Do you want full autonomy with git safety?
├─ Yes → Z-Thread
└─ No → Base Thread
```

## File Structure

```
agents-threads/
├── plugin.json              # Plugin manifest
├── README.md                # This file
├── MANUAL.md                # Detailed user manual
├── Threads.md               # Original specifications
├── CLAUDE.md                # Claude Code guidance
└── .claude/
    └── skills/
        ├── base-thread.md
        ├── p-thread.md
        ├── c-thread.md
        ├── f-thread.md
        ├── b-thread.md
        ├── l-thread.md
        └── z-thread.md
```

## Contributing

Contributions welcome! Ideas for new thread types or improvements to existing ones can be submitted as issues or PRs.

## License

MIT License - Use freely in your projects.
