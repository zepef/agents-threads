# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the **agents-threads** plugin - a collection of 7 Thread-based execution patterns for Claude Code. Each thread type provides a specialized workflow for different task categories.

## Thread Types

| Thread | Trigger | Purpose |
|--------|---------|---------|
| **Base Thread** | "Run a Base Thread on..." | Standard single-context execution: Plan → Execute → Verify |
| **P-Thread** | "Start a P-Thread [N] for..." | Parallel exploration of N different solution approaches |
| **C-Thread** | "Start a C-Thread for..." | Chained phases with mandatory user approval between each |
| **F-Thread** | "Run an F-Thread on..." | Fusion: Generate 3 variants (perf/clean/robust), combine best parts |
| **B-Thread** | "Start a B-Thread for..." | Manager pattern with TASKS.todo file for progress tracking |
| **L-Thread** | "Run an L-Thread to fix..." | Self-correcting loop until verification passes (Ralph Loop) |
| **Z-Thread** | "Execute Z-Thread: [task]" | Full autonomy with git branch isolation and auto-commit |

## Plugin Structure

```
agents-threads/
├── plugin.json              # Plugin manifest
├── Threads.md               # Original thread specifications
├── CLAUDE.md                # This file
└── .claude/
    └── skills/
        ├── base-thread.md   # Standard execution
        ├── p-thread.md      # Parallel exploration
        ├── c-thread.md      # Chained/phased
        ├── f-thread.md      # Fusion
        ├── b-thread.md      # Big/manager
        ├── l-thread.md      # Ralph Loop
        └── z-thread.md      # Zero-touch autonomy
```

## Installation

Add this plugin to Claude Code by including the path in your settings or linking it as a plugin.

## Key Patterns

- **L-Thread** creates `verified.lock` on success
- **B-Thread** maintains `TASKS.todo` for progress tracking
- **C-Thread** requires explicit user approval between phases
- **Z-Thread** requires an initialized git repository
- **F-Thread** creates temporary `solution_A/B/C` files then merges to `FINAL_SOLUTION`
