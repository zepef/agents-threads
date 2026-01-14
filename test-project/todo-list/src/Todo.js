/**
 * Todo Model
 */
class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = new Date();
  }

  toggle() {
    this.completed = !this.completed;
    return this;
  }

  update(title) {
    this.title = title;
    return this;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
      createdAt: this.createdAt.toISOString()
    };
  }
}

module.exports = Todo;
