import { Todo } from "../../types/todo";
import styles from "./TodoElement.module.css";

type TodoElementProps = {
  index: number;
  data: Todo;
  handleCheckboxToggleCallback: (index: number) => void;
  handleDeleteTodoCallback: (index: number) => void;
};

const TodoElement = ({
  index,
  data,
  handleCheckboxToggleCallback,
  handleDeleteTodoCallback,
}: TodoElementProps) => {
  const handleCheckboxToggle = () => {
    handleCheckboxToggleCallback(index);
  };

  const handleDeleteTodo = () => {
    handleDeleteTodoCallback(index);
  };

  return (
    <li
      className={`${styles.todoElement} ${data.isCompleted ? styles.todoCompleted : ""}`}
    >
      <div className={styles.leftContainer}>
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={handleCheckboxToggle}
          className={styles.checkbox}
        />
        <p className={styles.title}>{data.title}</p>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteTodo}>
        Delete
      </button>
    </li>
  );
};

export default TodoElement;
