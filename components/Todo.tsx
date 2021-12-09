import { useState } from "react";

import { ActionType, TodoItemType, useTodo } from "../context/todoContext";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function Todo() {
  const { state, dispatch } = useTodo();

  const addTodo = (todoItem: string) => {
    const newTodoItem: TodoItemType = {
      id: Date.now().toLocaleString(),
      value: todoItem,
      done: false,
    };
    dispatch({ type: ActionType.ADD_TODO, payload: newTodoItem });
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
    <>
      <section className="container mx-auto max-w-screen-md">
        <TodoInput addTodo={addTodo} />
      </section>
      <section className="container mx-auto max-w-screen-md mt-4">
        <div>
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
    </>
  );
}

export default Todo;
