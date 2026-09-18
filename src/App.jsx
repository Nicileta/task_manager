import { useEffect, useState } from 'react'
import Task from './components/Task.jsx'
import TaskForm from './components/TaskForm.jsx'
import './App.css'

const initialTasks = [
  { id: 1, title: 'Configurează spațiul de lucru', completed: true },
  { id: 2, title: 'Planifică următoarea sesiune', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('task-manager-tasks')
    return savedTasks ? JSON.parse(savedTasks) : initialTasks
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('task-manager-tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(title) {
    setTasks((currentTasks) => [...currentTasks, { id: Date.now(), title, completed: false }])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )))
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0

  return (
    <main className="app-shell">
      <section className="app-panel" aria-labelledby="app-title">
        <header className="app-header">
          <div><p className="eyebrow">Organizează-ți ziua</p><h1 id="app-title">Task Manager</h1></div>
          <div className="header-mark" aria-hidden="true">✓</div>
        </header>
        <TaskForm onAddTask={addTask} />
        <div className="overview" aria-label="Statistici sarcini">
          <div className="stat-card"><span className="stat-label">Total sarcini</span><strong>{tasks.length}</strong></div>
          <div className="stat-card stat-card-accent"><span className="stat-label">Finalizate</span><strong>{completedCount}</strong></div>
          <div className="progress-stat"><div className="progress-copy"><span>Progres</span><strong>{progress}%</strong></div><div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"><span style={{ width: `${progress}%` }} /></div></div>
        </div>
        <div className="list-toolbar"><h2>Sarcinile tale</h2><div className="filters" role="group" aria-label="Filtrează sarcinile">
          {[['all', 'Toate'], ['active', 'Active'], ['completed', 'Finalizate']].map(([value, label]) => <button key={value} className={filter === value ? 'filter-button is-selected' : 'filter-button'} type="button" onClick={() => setFilter(value)}>{label}</button>)}
        </div></div>
        {visibleTasks.length > 0 ? <ul className="task-list">{visibleTasks.map((task) => <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />)}</ul> : <div className="empty-state"><span className="empty-icon" aria-hidden="true">○</span><p>{tasks.length ? 'Nu există sarcini în acest filtru.' : 'Nu există sarcini momentan.'}</p><span>Adaugă ceva mic și începe de acolo.</span></div>}
      </section>
      <p className="footer-note">Fiecare pas contează.</p>
    </main>
  )
}

export default App
