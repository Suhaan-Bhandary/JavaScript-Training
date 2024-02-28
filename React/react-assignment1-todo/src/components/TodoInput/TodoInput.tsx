import { useState } from "react";

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
      <div className="inputField">
        <input type="text" value={newTodoTitle} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
