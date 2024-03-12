import { Route, Routes } from "react-router-dom";
import AddTodo from "../pages/AddTodo/AddTodo";
import Home from "../pages/Home/Home";
import TodoDetail from "../pages/TodoDetail/TodoDetail";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/:todoId" element={<TodoDetail />} />
    </Routes>
  );
};

export default Router;
