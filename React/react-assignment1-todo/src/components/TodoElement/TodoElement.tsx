import { Todo } from "../../types/todo";

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
    <li>
      <div>
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={handleCheckboxToggle}
        />
        <p>{data.title}</p>
        <p>{String(data.isCompleted)}</p>
      </div>
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoElement;
