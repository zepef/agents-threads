/**
 * FINAL FUSION: formatTodo
 * Combines: Performance (A) + Readability (B) + Robustness (C)
 */
function formatTodo(todo) {
  // Robustness from C: Input validation
  if (!todo || typeof todo !== 'object') {
    return '[?] Invalid todo';
  }

  // Readability from B: Clear variable names
  const checkbox = todo.completed ? '[x]' : '[ ]';
  const title = String(todo.title || 'Untitled').trim();

  // Performance from A: Single template literal return
  return `${checkbox} ${title}`;
}

module.exports = formatTodo;
