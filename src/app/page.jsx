//Con Next podemos tener el front y el back en el mismo proyecto. Dado esto, hacer una llamado a nuestra BD desde un componente que este renderizado en el servidor.

// async function loadTasks () {
//     const res = await fetch("http://localhost:3000/api/tasks")
//     const data = await res.json();
//     return data
// }

"use client";
import { useState, useEffect } from "react";

const HomePage = () => {
  //const tasks =  await loadTasks(). Recuerda volver este componente async.
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    const res = await fetch("/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tasks = res.json();
    return tasks;
  };

  useEffect(() => {
    getTasks().then((val) => setTasks(val));
  }, []);
  return (
    <div>
      <h1>Tareas</h1>
      {tasks?.map((task) => (
        <div key={task.id}>{task.title} </div>
      ))}
    </div>
  );
};

export default HomePage;
