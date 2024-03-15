import { useState } from "react";
import * as yup from "yup";
import styles from "./TodoInput.module.css";

type TodoInputProps = {
  handleAddTodoCallback: (title: string, dueDate: string) => void;
};

const todoSchema = yup.object().shape({
  title: yup.string().required("Todo title is required"),
  dueDate: yup
    .date()
    .typeError("Todo Due date is required")
    .default(() => new Date())
    .min(new Date(), "Due date must be greater than today's Date"),
});

const TodoInput = ({ handleAddTodoCallback }: TodoInputProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  const handleDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDueDate(event.target.value);
  };

  const handleInputFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Empty errors
    setErrors({});

    todoSchema
      .validate(
        {
          title: newTodoTitle,
          dueDate: dueDate,
        },
        { abortEarly: false },
      )
      .then(() => {
        handleAddTodoCallback(newTodoTitle, dueDate);
        setDueDate("");
        setNewTodoTitle("");
      })
      .catch((error) => {
        const newErrors: Record<string, string> = {};
        for (let err of error?.inner) {
          newErrors[err.path] = err.message;
        }
        setErrors(newErrors);
      });
  };

  return (
    <form onSubmit={handleInputFormSubmit}>
      <h2>Todo Form</h2>
      <div className={styles.todoInputField}>
        <input
          name="newTodo"
          className={styles.inputField}
          type="text"
          value={newTodoTitle}
          placeholder="Todo..."
          onChange={handleInputChange}
        />
        {errors?.["title"] ? (
          <p className={styles.error}>{errors?.["title"]}</p>
        ) : null}
      </div>
      <div className={styles.todoInputField}>
        <input
          className={styles.inputField}
          name="dueDate"
          type="date"
          value={dueDate}
          placeholder="Due Date..."
          onChange={handleDateInputChange}
        />
        {errors?.["dueDate"] ? (
          <p className={styles.error}>{errors?.["dueDate"]}</p>
        ) : null}
      </div>
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={newTodoTitle === "" || dueDate === ""}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
