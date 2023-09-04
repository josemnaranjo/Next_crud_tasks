const NewPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4">
        <h1 className="py-2 text-2xl text-bold">Formulario de tareas</h1>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          id="title"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          rows="3"
          placeholder="Describe tu tarea"
          id="description"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewPage;
