import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

test("render Page header", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>,
  );

  const header = screen.getByText("Todo List");
  expect(header).toBeInTheDocument();
});

test("Check if Search... is visible or not", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>,
  );

  const inputElement = screen.getByPlaceholderText("Search...");
  expect(inputElement).toBeInTheDocument();
});
