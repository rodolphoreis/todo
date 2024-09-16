import { FormEvent } from "react";
import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <main className="container max-w-full">
      <header className=" w-full  mx-auto my-0 h-28 bg-zinc-950">
        <div className=" max-w-screen-xl  mx-auto h-28 flex items-center justify-center">
          <h1 className="  flex items-center gap-3">
            <FaTasks size={30} className="text-purple-400" />
            <div>
              <span className="text-4xl text-blue-400 font-black ">to</span>
              <span className="text-4xl text-purple-400 font-black">do</span>
            </div>
          </h1>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto -my-3 flex items-center justify-center ">
        <form className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-4 flex-grow text-lg text-gray-800 border-none rounded-md focus:outline-none"
            placeholder="Adicionar nova tarefa..."
          />
          <button
            type="submit"
            className=" flex p-2 text-lg text-white bg-blue-400 hover:bg-blue-500 rounded-md items-center"
          >
            Criar <FaPlus className="ml-2" size={15} />
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
