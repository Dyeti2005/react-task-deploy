import React from 'react'
import { TaskCard } from './TaskCard'

export function TaskList({tasks,deleteTask}) {

  if (tasks.length === 0) return <h1 className='text-white font-bold text-4xl text-center mb-8'>No hay tareas Aun</h1>

  return <div className='grid grid-cols-4 gap-2'>
    {tasks.map((task) => (
      <TaskCard key={task.ID} task={task} deleteTask={deleteTask}></TaskCard>
    ))}
  </div>
}