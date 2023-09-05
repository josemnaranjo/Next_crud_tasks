"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//en general no hay mucha diferencia con usar react, solo la implementación de "use client" ya que estamos agregando interactividad

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } else {
      //aquí llamamos a la API que creamos para crear nuevas tareas ("/api/tasks"). Atento a la forma en que se debe construir la funcion FETCH. En la parte "headers", indicamos al servidor el tipo de dato que estamos enviando.
      //Que en este caso es un json (https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Type)
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    }
    router.refresh();
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      fetch(`/api/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={handleSubmit}>
        <h1 className="py-2 text-2xl text-bold">Formulario de tareas</h1>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          rows="3"
          placeholder="Describe tu tarea"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Crear
        </button>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3"
            type="button"
            onClick={async () => {
              await fetch(`/api/${params.id}`, { method: "DELETE" });
              router.refresh();
              router.push("/");
            }}
          >
            {" "}
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPage;
