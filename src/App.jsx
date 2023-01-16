import React from "react";

import { TaskList } from "./Componentes/TaskList";
import { TaskForm } from "./Componentes/TaskForm";
import { Task } from "./data/Task";

import { useState, useEffect } from "react";

export function App() {
  const [tasks, SetTasks] = useState([]);

  useEffect(() => {
    SetTasks(Task);
  }, []);

  function Create_task(task) {
    SetTasks([
      ...tasks,
      {
        TITLE: task.TITLE,
        ID: tasks.length,
        DESCRIPTION: task.DESCRIPTION,
      },
    ]);
  }

  function deleteTask(taskID) {
    SetTasks(tasks.filter((task) => task.ID !== taskID));
  }

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskList tasks={tasks} deleteTask={deleteTask}></TaskList>
        <hr></hr>
        <br></br>
        <TaskForm Create_task={Create_task}></TaskForm>
      </div>
    </div>
  );
}
