/// <reference types="@testing-library/jest-dom" />
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Hello from "./Hello";

describe("Hello Component Testing", () => {
  test("renders Hello World as a text", () => {
    render(<Hello />);
    const headerElement = screen.getByText(/hello world!/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders unchanged text if the button was not clicked", () => {
    render(<Hello />);

    const unchangedTextElement = screen.getByText("glad to see you", {
      exact: false,
    });
    expect(unchangedTextElement).toBeInTheDocument();
  });

  test("renders 'text is changed' if the button was clicked", async () => {
    //Arrange
    render(<Hello />);

    //Act
    // const buttonElement = screen.getByRole("button");
    const buttonElement = screen.getByText("Change Text");
    await userEvent.click(buttonElement);

    //Assert
    await waitFor(() => {
      const changedTextElement = screen.getByText("Changed Text");
      expect(changedTextElement).toBeInTheDocument();
    });
  });

  test("remove glad to see you text if the button was clicked", async () => {
    //Arrange
    render(<Hello />);

    //Act
    // const buttonElement = screen.getByRole("button");
    const buttonElement = screen.getByText("Change Text");
    await userEvent.click(buttonElement);

    //Assert
    await waitFor(() => {
      const unchangedTextElement = screen.queryByText("glad to see you", {
        exact: false,
      });
      expect(unchangedTextElement).toBeNull();
    });
  });
});
