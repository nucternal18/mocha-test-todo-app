import Todo from "./Todo";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TodoInput from "./TodoInput";
import React from "react";

describe("TodoInput", () => {
  const addTodo = jest.fn();

  beforeEach(() => {
    addTodo.mockClear();
    render(<TodoInput addTodo={addTodo} />);
  });

  it("renders correctly", () => {
    expect(getTodoInput()).toBeInTheDocument();
    expect(getTodoButton()).toBeInTheDocument();
  });

  it("calls addTodo after all input fields are called and button is clicked", async () => {
    fireEvent.change(getTodoInput(), { target: { value: "test" } });
    clickTodoButton();
    await waitFor(() => expect(addTodo).toHaveBeenCalledTimes(1));
    expect(addTodo).toHaveBeenCalledWith("test");
  });
});

function clickTodoButton() {
  return user.click(getTodoButton());
}
function getTodoInput() {
  return screen.getByTestId("todo-input");
}

function getTodoButton() {
  return screen.getByTestId("todo-button");
}
