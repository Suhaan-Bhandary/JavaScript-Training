import { useState } from "react";
import { Todo } from "../../types/todo";
import Modal from "../Modal/Modal";
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCheckboxToggle = () => {
    handleCheckboxToggleCallback(index);
  };

  const handleDeleteTodo = () => {
    handleDeleteTodoCallback(index);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
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

      {isDeleteModalOpen ? (
        <Modal>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete "{data.title}"</p>
          <div className={styles.btnConntainer}>
            <button className={styles.confirmBtn} onClick={handleDeleteTodo}>
              Confirm
            </button>
            <button className={styles.closeBtn} onClick={closeDeleteModal}>
              Close Modal
            </button>
          </div>
        </Modal>
      ) : null}

      <button className={styles.deleteBtn} onClick={openDeleteModal}>
        Delete
      </button>
    </li>
  );
};

export default TodoElement;
