class Task {
  constructor(dateDue, description) {
    this.dateDue = dateDue
    this.description = description
    this.status = "incomplete"
  }

  isOverdue() {
    if(this.status === 'incomplete' && this.dateDue !== null) {
      const today = new Date()
      return today > this.dateDue
    }
    return false
  }
}

module.exports = Task