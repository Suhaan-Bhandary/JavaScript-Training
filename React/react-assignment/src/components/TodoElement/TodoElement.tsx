import { Link } from "react-router-dom";
import { Todo } from "../../types/todo";
import styles from "./TodoElement.module.css";

type TodoElementProps = {
  index: number;
  data: Todo;
  handleCheckboxToggleCallback: (index: number) => void;
};

const TodoElement = ({
  index,
  data,
  handleCheckboxToggleCallback,
}: TodoElementProps) => {
  const handleCheckboxToggle = () => {
    handleCheckboxToggleCallback(index);
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

      <Link to={`/${index}`} className={styles.viewBtn}>
        View
      </Link>
    </li>
  );
};

export default TodoElement;
