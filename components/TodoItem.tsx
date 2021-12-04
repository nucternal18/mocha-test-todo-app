import { AiTwotoneDelete } from "react-icons/ai";
import { TodoItemType } from "../pages";

interface ITodoItem {
  deleteTodo: (id: string) => void;
  toggleTodo: (done: boolean, id: string) => void;
  todo: TodoItemType;
}

function TodoItem({ todo, deleteTodo, toggleTodo }: ITodoItem) {
  const { id, value, done }: TodoItemType = todo;
  console.log(todo);
  return (
    <div className=" bg-white shadow-2xl rounded-lg w-full my-2 max-w-screen-md">
      <div className="flex items-center justify-between p-2  cursor-pointer">
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={done}
              onChange={(e) => toggleTodo(e.target.checked, id)}
            />
          </label>
        </div>
        <div>
          <p
            className={`${
              done ? "line-through" : ""
            } text-lg font-light leading-relaxed text-gray-800`}
          >
            {value}
          </p>
        </div>
        <div className="mr-4">
          <button type="button" onClick={() => deleteTodo(id)}>
            <AiTwotoneDelete className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
