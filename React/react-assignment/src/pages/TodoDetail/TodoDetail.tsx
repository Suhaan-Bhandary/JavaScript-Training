import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { BASE_TODOS_URL } from "../../constants/urls";
import useFetch from "../../hooks/useFetch";
import { Todo } from "../../types/todo";
import styles from "./TodoDetail.module.css";

const TodoDetail = () => {
  const { todoId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [todo, isLoading] = useFetch<Todo>(
    `${BASE_TODOS_URL}/${todoId}`,
    ["todo-detail", String(todoId)],
    () => toast.error("Error while fetching todo detail"),
  );

  if (isLoading) {
    return <div className={styles.isLoadingMessage}>Loading...</div>;
  }

  if (!isLoading && !todo) {
    return <div className={styles.notFoundMessage}>Todo not Found</div>;
  }

  const handleDeleteTodo = () => {
    axios
      .delete(`${BASE_TODOS_URL}/${todoId}`)
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ["todo-list"],
        });

        toast.success("Todo deleted successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Error in deleting Todo");
      });
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.TodoDetail}>
      <div className={styles.content}>
        <h1 className={styles.title}>{todo?.title}</h1>
        <p className={styles.dueDate}>Due Date: {todo?.dueDate}</p>
      </div>

      {isDeleteModalOpen ? (
        <Modal>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete "{todo?.title}"</p>
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
