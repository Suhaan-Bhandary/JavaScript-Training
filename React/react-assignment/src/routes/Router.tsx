import { toast } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import AddTodo from "../pages/AddTodo/AddTodo";
import Home from "../pages/Home/Home";
import TodoDetail from "../pages/TodoDetail/TodoDetail";
import { Todo } from "../types/todo";

const Router = () => {
  const [todoList, setTodoList, isLoading] = useFetch<Todo[]>(
    "http://localhost:5000/todos",
    [],
    () => toast.error("Error while loading data"),
  );

  const handleAddTodo = (title: string) => {
    if (title === "") {
      toast.error("Title cannot be empty.");
      return;
    }

    const isTitlePresent = todoList.some((todo) => todo.title === title);
    if (isTitlePresent) {
      toast.error("Duplicate title not present.");
      return;
    }

    const newTodo = {
      title,
      isCompleted: false,
      createdOn: new Date(),
    };

    setTodoList((todoList) => [...todoList, newTodo]);
    toast.success("Todo added successfully");
  };

  const handleCheckboxToggle = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = {
      ...updatedTodoList[index],
      isCompleted: !updatedTodoList[index].isCompleted,
    };

    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (deleteIndex: number) => {
    const updatedTodoList = todoList.filter(
      (_, index) => index !== deleteIndex,
    );

    setTodoList(updatedTodoList);
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        index
        element={
          <Home
            todoList={todoList}
            handleCheckboxToggle={handleCheckboxToggle}
          />
        }
      />

      <Route
        path="/"
        element={
          <Home
            todoList={todoList}
            handleCheckboxToggle={handleCheckboxToggle}
          />
        }
      />

      <Route path="/add" element={<AddTodo handleAddTodo={handleAddTodo} />} />
      <Route
        path="/:todoId"
        element={
          <TodoDetail
            todoList={todoList}
            handleDeleteTodoCallback={handleDeleteTodo}
          />
        }
      />
    </Routes>
  );
};

export default Router;
