class Task {
  #dateDue
  #description
  #status

  constructor(dateDue, description) {
    this.#dateDue = dateDue
    this.#description = description
    this.#status = "incomplete"
  }

  isOverdue() {
    if (this.#status === "incomplete" && this.#dateDue !== null) {
      const today = new Date()
      return today > this.#dateDue
    }
    return false
  }

  getStatus() {
    return this.#status
  }

  setStatus(status) {
    if (status === "complete" || status === "incomplete") {
      this.#status = status
    } else {
      throw new Error("Invalid status")
    }
  }

  getDateDue() {
    return this.#dateDue
  }

  getDescription() {
    return this.#description
  }
}

module.exports = Task
