import { useState } from "react";
import { Todo } from "../../types/todo";

const Home = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div className="wrapper">
      <div className="home"></div>
    </div>
  );
};

export default Home;
