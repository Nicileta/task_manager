import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedName = taskName.trim()

    if (!trimmedName) return

    onAddTask(trimmedName)
    setTaskName('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-name">Denumirea sarcinii</label>
      <input
        id="task-name"
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Ce trebuie făcut?"
        autoComplete="off"
      />
      <button type="submit">Adaugă sarcina</button>
    </form>
  )
}

export default TaskForm
