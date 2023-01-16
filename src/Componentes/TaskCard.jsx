import React from "react";

export function TaskCard({ task, deleteTask }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.TITLE}</h1>
      <p className="text-gray-500 text-sm">{task.DESCRIPTION}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.ID)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
