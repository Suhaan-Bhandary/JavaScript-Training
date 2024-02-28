import { useState } from "react";
import TodoElement from "../../components/TodoElement/TodoElement";
import TodoInput from "../../components/TodoInput/TodoInput";
import { Todo } from "../../types/todo";

const Home = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    if (title === "") {
      // Todo: Add a toast here
      console.log("Title cannot be empty.");
      return;
    }

    const isTitlePresent = todoList.some((todo) => todo.title === title);
    if (isTitlePresent) {
      // Todo: Add a toast here
      console.log("Duplicate title not present.");
      return;
    }

    const newTodo = {
      title,
      isCompleted: false,
      createdOn: new Date(),
    };

    setTodoList((todoList) => [...todoList, newTodo]);
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

  return (
    <div className="wrapper">
      <div className="home">
        <TodoInput handleAddTodoCallback={handleAddTodo} />

        <div>
          {todoList?.length !== 0 ? (
            <ul>
              {todoList?.map((todo, index) => (
                <TodoElement
                  key={todo.title}
                  index={index}
                  data={todo}
                  handleCheckboxToggleCallback={handleCheckboxToggle}
                  handleDeleteTodoCallback={handleDeleteTodo}
                />
              ))}
            </ul>
          ) : (
            <p>No todo available...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
