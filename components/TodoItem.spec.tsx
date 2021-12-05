import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("renders TodoItem", () => {
    render(
      <TodoItem
        todo={{ id: "1", value: "Test todo", done: false }}
        deleteTodo={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
        toggleTodo={function (done: boolean, id: string): void {
          {
            throw new Error("Function not implemented.");
          }
        }}
      />
    );
    expect(screen.getByText("Test todo")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-button")).toBeInTheDocument();
  });
});
