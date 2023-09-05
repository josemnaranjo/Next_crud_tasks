//Con Next podemos tener el front y el back en el mismo proyecto. Dado esto, hacer una llamado a nuestra BD desde un componente que este renderizado en el servidor.

// async function loadTasks () {
//     const res = await fetch("http://localhost:3000/api/tasks")
//     const data = await res.json();
//     return data
// }

"use client";
import { useState, useEffect } from "react";
import TaskCard from "@/components/TaskCard";

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
    <section className="containet mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
