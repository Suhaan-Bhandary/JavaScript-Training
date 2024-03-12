import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASE_TODOS_URL } from "../../constants/urls";
import { Todo } from "../../types/todo";
import styles from "./TodoElement.module.css";

type TodoElementProps = {
  data: Todo;
};

const TodoElement = ({ data }: TodoElementProps) => {
  const queryClient = useQueryClient();

  const handleCheckboxToggle = async () => {
    const newTodo: Todo = {
      ...data,
      isCompleted: !data.isCompleted,
    };

    axios
      .put(`${BASE_TODOS_URL}/${newTodo.id}`, newTodo)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["todo-list"] });
      })
      .catch(() => toast.error("Could not update todo checkbox"));
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

      <div className={styles.rightContainer}>
        <p>{data.dueDate}</p>
        <Link to={`/${data.id}`} className={styles.viewBtn}>
          View
        </Link>
      </div>
    </li>
  );
};

export default TodoElement;
