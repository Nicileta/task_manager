function Task({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'is-completed' : ''}`}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkmark" aria-hidden="true">✓</span>
        <span className="task-title">{task.title}</span>
      </label>
      <button className="delete-button" type="button" onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  )
}

export default Task
