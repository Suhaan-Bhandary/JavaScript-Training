import { useState } from "react";
import styles from "./TodoInput.module.css";

type TodoInputProps = {
  handleAddTodoCallback: (title: string) => void;
};

const TodoInput = ({ handleAddTodoCallback }: TodoInputProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  const handleInputFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAddTodoCallback(newTodoTitle);
    setNewTodoTitle("");
  };

  return (
    <form onSubmit={handleInputFormSubmit}>
      <div className={styles.todoInputField}>
        <input
          className={styles.inputField}
          type="text"
          value={newTodoTitle}
          placeholder="Todo..."
          onChange={handleInputChange}
        />
        <button className={styles.submitBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
