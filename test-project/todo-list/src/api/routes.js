/**
 * API Routes - Implemented
 */
const express = require('express');
const router = express.Router();

// In-memory store for testing
let todos = [];
let nextId = 1;

// GET /todos - List all
router.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - Create
router.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title required' });
  }
  const todo = { id: nextId++, title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE /todos/:id - Delete
router.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  todos.splice(idx, 1);
  res.status(204).send();
});

module.exports = router;
