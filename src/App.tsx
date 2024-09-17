import { FormEvent } from "react";
import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    {
      id: uuidv4(),
      title: "Estudar React",
      isCompleted: false,
    },
  ]);
  const [task, setTask] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: task,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
  }
  function handleSubmitChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  function handleCreteNewTask() {
    if (task.trim() === "") return;
    const newTask = {
      id: uuidv4(),
      title: task,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
  }
  function handleIsCompleted(id: string) {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updatedTasks);
  }
  function handleDeleteTask(id: string) {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
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
            name="task"
            value={task}
            onChange={handleSubmitChange}
            required
            className="p-4 flex-grow text-lg text-gray-800 border-none rounded-md focus:outline-none"
            placeholder="Adicionar nova tarefa..."
          />
          <button
            type="submit"
            className=" flex p-2 text-lg text-white bg-blue-400 hover:bg-blue-500 rounded-md items-center"
            onClick={handleCreteNewTask}
          >
            Criar <FaPlus className="ml-2" size={15} />
          </button>
        </form>
      </div>

      <div className="flex justify-between max-w-screen-xl mx-auto mt-16 text-center text-lg  ">
        <p className=" text-blue-400 font-bold">
          Tarefas criadas{" "}
          <span className="bg-zinc-600 text-zinc-200 ml-2 px-3  py-1.5 rounded-full">
            {taskList.length}
          </span>
        </p>
        <p className="text-purple-400 font-bold">
          Concluídas{" "}
          <span className="bg-zinc-600 px-3 ml-2 text-zinc-200 py-1.5 rounded-full">
            {completedTasks} de {tasksCreated}
          </span>
        </p>
      </div>

      {taskList.length > 0 ? (
        <div className="max-w-screen-xl mx-auto my-12 flex flex-col items-center justify-center">
          {taskList.map((task) => (
            <Tasks
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              handleIsCompleted={handleIsCompleted}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-screen-sm mx-auto my-24 text-center  text-zinc-300">
          <div className=" flex gap-3 justify-center">
            <MdOutlineChecklist size={40} className="text-gray-300" />
            <h1 className="text-zinc-300 text-3xl">
              Nenhuma tarefa cadastrada
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
