import TodoInput from "../../components/TodoInput/TodoInput";
import styles from "./AddTodo.module.css";

type AddTodoProps = {
  handleAddTodo: (title: string, dueDate: string) => void;
};

const AddTodo = ({ handleAddTodo }: AddTodoProps) => {
  return (
    <div className={styles.AddTodo}>
      <TodoInput handleAddTodoCallback={handleAddTodo} />
    </div>
  );
};

export default AddTodo;
