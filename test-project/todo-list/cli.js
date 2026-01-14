#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'todos.json');

function load() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {}
  return { todos: [], nextId: 1 };
}

function save(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const [,, cmd, ...args] = process.argv;

if (cmd === 'add') {
  const title = args.join(' ');
  if (!title) {
    console.log('Usage: todo add <title>');
  } else {
    const data = load();
    const todo = { id: data.nextId++, title, completed: false };
    data.todos.push(todo);
    save(data);
    console.log(`Added: ${todo.title}`);
  }
} else if (cmd === 'done') {
  const id = parseInt(args[0]);
  if (!id) {
    console.log('Usage: todo done <id>');
  } else {
    const data = load();
    const todo = data.todos.find(t => t.id === id);
    if (!todo) {
      console.log(`Todo ${id} not found`);
    } else {
      todo.completed = true;
      save(data);
      console.log(`Completed: ${todo.title}`);
    }
  }
} else if (cmd === 'stats') {
  const data = load();
  const total = data.todos.length;
  const done = data.todos.filter(t => t.completed).length;
  const pending = total - done;
  console.log(`Total: ${total} | Done: ${done} | Pending: ${pending}`);
} else if (cmd === 'list') {
  const data = load();
  if (data.todos.length === 0) {
    console.log('No todos yet.');
  } else {
    data.todos.forEach(t => {
      console.log(`[${t.completed ? 'x' : ' '}] ${t.id}. ${t.title}`);
    });
  }
} else {
  console.log('Usage: todo <list|add|done|stats>');
}
