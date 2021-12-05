import Todo from "./Todo";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

describe("Todo", () => {
  it("renders correctly", () => {
    render(
      <Todo
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
