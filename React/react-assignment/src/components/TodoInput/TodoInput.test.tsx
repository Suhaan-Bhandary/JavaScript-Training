import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import TodoInput from "./TodoInput";

const testProps = {
  mockHandleAddTodoCallback: jest.fn(),
};

test("render Page header", () => {
  render(
    <TodoInput handleAddTodoCallback={testProps.mockHandleAddTodoCallback} />,
  );

  const header = screen.getByText("Todo Form");
  expect(header).toBeInTheDocument();
});

test("ADD button initially disabled", () => {
  render(
    <TodoInput handleAddTodoCallback={testProps.mockHandleAddTodoCallback} />,
  );

  const addButton = screen.getByText("Add");
  expect(addButton).toBeDisabled();
});

test("ADD button is enabled after entering input values", () => {
  render(
    <TodoInput handleAddTodoCallback={testProps.mockHandleAddTodoCallback} />,
  );

  const input = screen.getByPlaceholderText("Todo...");
  const dateInput = screen.getByPlaceholderText("Due Date...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.change(dateInput, { target: { value: "2025-10-10" } });

  expect(addButton).toBeEnabled();
});

test("initially input add and date is empty", () => {
  render(
    <TodoInput handleAddTodoCallback={testProps.mockHandleAddTodoCallback} />,
  );

  const input = screen.getByPlaceholderText("Todo...");
  const dateInput = screen.getByPlaceholderText("Due Date...");

  expect(input).toHaveValue("");
  expect(dateInput).toHaveValue("");
});

test("add todo successfully", async () => {
  const callback = jest.fn();
  render(<TodoInput handleAddTodoCallback={callback} />);

  const input = screen.getByPlaceholderText("Todo...");
  const dateInput = screen.getByPlaceholderText("Due Date...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.change(dateInput, { target: { value: "2024-10-10" } });

  expect(addButton).toBeEnabled();
  fireEvent.click(addButton);

  // Check if the function is called or not
  await waitFor(() => expect(callback).toBeCalledTimes(1));
});

test("input field and date picker are cleared after the todo is added", async () => {
  render(
    <TodoInput handleAddTodoCallback={testProps.mockHandleAddTodoCallback} />,
  );

  const input = screen.getByPlaceholderText("Todo...");
  const dateInput = screen.getByPlaceholderText("Due Date...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.change(dateInput, { target: { value: "2024-10-10" } });

  await act(async () => fireEvent.click(addButton));

  expect(input).toHaveValue("");
  expect(dateInput).toHaveValue("");
});
