import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  it("Should render", () => {
    render(<Todo />);
    expect(screen.getByText("Todo Items")).toBeInTheDocument();
  });
});
