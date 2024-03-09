import { useState } from "react";
import { toast } from "react-hot-toast";
import TodoElement from "../../components/TodoElement/TodoElement";
import TodoInput from "../../components/TodoInput/TodoInput";
import { Todo } from "../../types/todo";
import styles from "./Home.module.css";

const Home = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

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
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <h1 className={styles.title}>Todo List</h1>

        <TodoInput handleAddTodoCallback={handleAddTodo} />

        <div className={styles.todoListContainer}>
          {todoList?.length !== 0 ? (
            <ul className={styles.todoList}>
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
            <p className={styles.noTodoNote}>No todo available...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
