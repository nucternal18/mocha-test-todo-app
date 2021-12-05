import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

interface ITodo {
  addTodo: (todo: string) => void;
  setTodo: (e: string) => void;
  todo: string;
}

function Todo({ addTodo, todo, setTodo }: ITodo) {
  return (
    <form>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="todo"
          data-testid="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pr-10"
        />
        <button
          type="button"
          data-testid="todo-button"
          className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1"
          onClick={() => addTodo(todo)}
        >
          <FaPlusCircle />
        </button>
      </div>
    </form>
  );
}

export default Todo;
