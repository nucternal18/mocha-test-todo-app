import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

jest.mock("./TodoInput", () => ({
  TodoInput: jest.fn(() => <div>TodoInput</div>),
}));
const mockedTodoInput = mocked(TodoInput);
describe("Todo", () => {
  beforeEach(() => {
    // TodoInput.mockClear();
  });
  it("Should render", () => {
    render(<Todo />);
    expect(screen.getByText("Todo Items")).toBeInTheDocument();
  });

  it("Should render TodoInput passing the expected props", () => {
    render(<Todo />);

    expect(TodoInput).toHaveBeenCalledTimes(1);
  });
});
