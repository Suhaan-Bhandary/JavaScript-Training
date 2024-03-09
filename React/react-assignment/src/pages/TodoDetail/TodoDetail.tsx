import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { Todo } from "../../types/todo";
import styles from "./TodoDetail.module.css";

type TodoDetailProps = {
  todoList: Todo[];
  handleDeleteTodoCallback: (index: number) => void;
};

const TodoDetail = ({
  todoList,
  handleDeleteTodoCallback,
}: TodoDetailProps) => {
  const { todoId } = useParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const todoIndex = Number(todoId);
  const todo = todoList.find((_, index) => index === todoIndex);
  if (!todo) {
    return <div className={styles.notFoundMessage}>Todo not Found</div>;
  }

  const handleDeleteTodo = () => {
    handleDeleteTodoCallback(todoIndex);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.TodoDetail}>
      <h1 className={styles.title}>{todo?.title}</h1>

      {isDeleteModalOpen ? (
        <Modal>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete "{todo.title}"</p>
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
    </div>
  );
};

export default TodoDetail;
