class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    return this.tasks.filter(task => task.isOverdue() && task.getStatus() !== "complete")
}
}

module.exports = TaskList