import Todo from "./Todo";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  it("renders correctly", () => {
    render(
      <TodoInput
        addTodo={function (todo: string): void {
          throw new Error("Function not implemented.");
        }}
        setTodo={function (e: string): void {
          throw new Error("Function not implemented.");
        }}
        todo={""}
      />
    );
    expect(screen.getByTestId("todo-input")).toBeInTheDocument();
    expect(screen.getByTestId("todo-button")).toBeInTheDocument();
  });
});
