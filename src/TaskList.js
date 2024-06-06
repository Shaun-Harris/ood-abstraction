class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    return this.tasks.filter(task => task.isOverdue())
      }
}

module.exports = TaskList