const Todo = require('../src/Todo');

// Test 1: Constructor
const t1 = new Todo(1, 'Test');
if (t1.id !== 1) throw new Error('ID failed');
if (t1.title !== 'Test') throw new Error('Title failed');

// Test 2: Toggle (BROKEN - wrong check)
t1.toggle();
if (t1.completed !== true) throw new Error('Toggle failed');

// Test 3: Update
t1.update('Updated');
if (t1.title !== 'Updated') throw new Error('Update failed');

console.log('All tests passed!');
