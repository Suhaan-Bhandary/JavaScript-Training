import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import TodoInput from "../../components/TodoInput/TodoInput";
import { BASE_TODOS_URL } from "../../constants/urls";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const queryClient = useQueryClient();

  const handleAddTodo = (title: string, dueDate: string) => {
    if (title === "") {
      toast.error("Title cannot be empty.");
      return;
    }

    const newTodo = {
      title,
      dueDate,
      isCompleted: false,
      createdOn: new Date(),
    };

    axios
      .post(`${BASE_TODOS_URL}`, newTodo)
      .then(() => {
        toast.success("Todo added successfully");
        queryClient.invalidateQueries({
          queryKey: ["todo-list"],
        });
      })
      .catch(() => toast.error("Could not add todo"));
  };

  return (
    <div className={styles.AddTodo}>
      <TodoInput handleAddTodoCallback={handleAddTodo} />
    </div>
  );
};

export default AddTodo;
