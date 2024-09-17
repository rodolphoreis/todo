import { FormEvent } from "react";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  handleIsCompleted: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function Tasks({
  id,
  title,
  isCompleted,
  handleIsCompleted,
  handleDeleteTask,
}: TaskProps) {
  function handleSubmitTasks(event: FormEvent) {
    event.preventDefault();
  }
  function handleChangeIsCompleted() {
    handleIsCompleted(id);
  }
  function handleDelete() {
    handleDeleteTask(id);
  }
  return (
    <article className="max-w-screen-xl w-full mx-auto flex my-2 items-center justify-center">
      <form
        onSubmit={handleSubmitTasks}
        className="w-full flex justify-between bg-zinc-700 p-4 rounded-xl"
      >
        <div>
          <input
            type="radio"
            onClick={handleChangeIsCompleted}
            className="form-radio mr-3 text-blue-500 focus:ring-zinc-800"
          />
          {isCompleted ? (
            <label className="line-through text-zinc-300">{title}</label>
          ) : (
            <label className="text-zinc-300">{title}</label>
          )}
        </div>
        <button type="submit" onClick={handleDelete}>
          <FaTrash className="text-zinc-400" />
        </button>
      </form>
    </article>
  );
}
