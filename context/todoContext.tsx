import { useState, useReducer, useContext, createContext } from "react";

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

interface InitialTodoState {
  todoItems: TodoItemType[];
}

const initialState = {
  todoItems: todoItemFromStorage,
};

// Todo Actions
export enum ActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

// Todo Reducer
const TodoReducer = (state: InitialTodoState, action: any) => {
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
const TodoContext = createContext<{
  state: InitialTodoState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

// Todo Provider
const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodo };
