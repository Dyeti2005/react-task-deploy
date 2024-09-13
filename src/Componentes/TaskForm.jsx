import React from "react";

import { useState } from "react";

export function TaskForm({ Create_task }) {
  const [TITLE, setTitle] = useState("");
  const [DESCRIPTION, setDescription] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    Create_task({
      TITLE,
      DESCRIPTION,
    });
    setTitle("")
    setDescription("")
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir Tarea</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tarea"
          value={TITLE}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={DESCRIPTION}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
