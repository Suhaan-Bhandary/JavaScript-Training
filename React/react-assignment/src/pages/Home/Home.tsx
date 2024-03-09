import TodoElement from "../../components/TodoElement/TodoElement";
import { Todo } from "../../types/todo";
import styles from "./Home.module.css";

type TodoListProps = {
  todoList: Todo[];
  handleCheckboxToggle: (index: number) => void;
};

const Home = ({ todoList, handleCheckboxToggle }: TodoListProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <h1 className={styles.title}>Todo List</h1>
        <div className={styles.todoListContainer}>
          {todoList?.length !== 0 ? (
            <ul className={styles.todoList}>
              {todoList?.map((todo, index) => (
                <TodoElement
                  key={todo.title}
                  index={index}
                  data={todo}
                  handleCheckboxToggleCallback={handleCheckboxToggle}
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
