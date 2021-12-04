import { useState, useReducer, useContext, createContext } from "react";
import type { NextPage } from "next";
import Todo from "../components/Todo";
import TodoItem from "../components/TodoItem";

export type TodoItemType = {
  id: string;
  value: string;
  done: boolean;
};

const todoItemFromStorage =
  typeof window !== "undefined"
    ? localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "[]")
      : []
    : [];

export interface InitialTodoState {
  todoItems: TodoItemType[];
}

const initialState = {
  todoItems: todoItemFromStorage,
};

// Todo Actions
enum ActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

// Todo Reducer
export const TodoReducer = (state: InitialTodoState, action: any) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const newTodoItem = action.payload;
      const existingTodoItem = state.todoItems.find(
        (todo) => todo.id === newTodoItem.id
      );
      const todoItems = existingTodoItem
        ? state.todoItems.map((todo) =>
            todo.id === existingTodoItem.id ? newTodoItem : todo
          )
        : [...state.todoItems, newTodoItem];

      localStorage.setItem("todos", JSON.stringify(todoItems));
      return { ...state, todoItems };
    }
    case ActionType.TOGGLE_TODO: {
      const newTodoItem = action.payload.updatedTodo;
      const existingTodoItem = state.todoItems.find(
        (todo) => todo.id === newTodoItem.id
      );
      const todoItems = existingTodoItem
        ? state.todoItems.map((todo) =>
            todo.id === existingTodoItem.id ? newTodoItem : todo
          )
        : [...state.todoItems, newTodoItem];

      localStorage.setItem("todos", JSON.stringify(todoItems));
      return { ...state, todoItems };
    }
    case ActionType.DELETE_TODO: {
      const todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem("todos", JSON.stringify(todoItems));
      return { ...state, todoItems };
    }
    default:
      return state;
  }
};

// Todo Context
export const TodoContext = createContext<{
  state: InitialTodoState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

// Todo Provider
// export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(TodoReducer, initialState);
//   return (
//     <TodoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

const Home: NextPage = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // const { state, dispatch } = useContext(TodoContext);

  const addTodo = (todoItem: string) => {
    const newTodoItem: TodoItemType = {
      id: Date.now().toLocaleString(),
      value: todoItem,
      done: false,
    };
    dispatch({ type: ActionType.ADD_TODO, payload: newTodoItem });
    setTodo("");
  };

  const toggleTodo = (done: boolean, id: string) => {
    const todo = state.todoItems.find((todo: TodoItemType) => todo.id === id);
    const updatedTodo = { ...todo, done };
    dispatch({ type: ActionType.TOGGLE_TODO, payload: { updatedTodo } });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: ActionType.DELETE_TODO, payload: { id } });
  };
  return (
    <main className="py-14">
      <section className="container mx-auto max-w-screen-md">
        <Todo addTodo={addTodo} todo={todo} setTodo={setTodo} />
      </section>
      <section className="container mx-auto max-w-screen-md mt-4">
        <div className="">
          <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800">
            Todo Items
          </h1>
          {state.todoItems?.map((todo: TodoItemType) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
