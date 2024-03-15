import { useMemo, useReducer, useState } from "react";
import { toast } from "react-hot-toast";
import TodoElement from "../../components/TodoElement/TodoElement";
import { BASE_TODOS_URL } from "../../constants/urls";
import useFetch from "../../hooks/useFetch";
import {
  paginationInitialValues,
  paginationReducer,
} from "../../reducers/pagination";
import { PaginatedTodo } from "../../types/todo";
import styles from "./Home.module.css";

const sortByKeys = [
  { key: "Title", value: "title" },
  { key: "Due Date", value: "dueDate" },
] as const;

const statusKeys = [
  { key: "Done", value: 1 },
  { key: "InComplete", value: 0 },
] as const;

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [todoStatusFilter, setTodoStatusFilter] = useState(-1);
  const [sortByKey, setSortByKey] = useState("");

  const [pagination, paginationDispatch] = useReducer(
    paginationReducer,
    paginationInitialValues,
  );

  const todosUrl = new URL(BASE_TODOS_URL);
  todosUrl.searchParams.set("_page", String(pagination.page));
  todosUrl.searchParams.set("_per_page", String(pagination.per_page));
  todosUrl.searchParams.set("_sort", sortByKey);
  if (todoStatusFilter !== -1) {
    todosUrl.searchParams.set("isCompleted", String(todoStatusFilter));
  }

  const [todoData, isLoading, isError] = useFetch<PaginatedTodo>(
    todosUrl.href,
    [
      "todo-list",
      sortByKey,
      todoStatusFilter,
      pagination.page,
      pagination.per_page,
    ],
    () => toast.error("Error while loading todo list"),
  );

  const todoList = todoData?.data;

  const handlePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hi");
    const value = Number(event.target.value);
    if (Number.isNaN(value) || value <= 0) return;
    paginationDispatch({
      type: "SET_PER_PAGE",
      payload: { perPage: value },
    });
  };

  const filteredTodoList = useMemo(() => {
    return todoList?.filter((todo) => {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const lowerCaseTodoTitle = todo.title.toLowerCase();
      return lowerCaseTodoTitle.includes(lowerCaseSearchValue);
    });
  }, [searchValue, todoList]);

  if (isError) {
    return (
      <div>
        <p>Error loading todos</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <h1 className={styles.title}>Todo List</h1>

        <div className={styles.filterBar}>
          <div className={styles.inputField}>
            <input
              type="text"
              value={searchValue}
              placeholder="Search..."
              onChange={(event) => {
                setSearchValue(event.target.value);
                paginationDispatch({ type: "RESET_PAGE" });
              }}
            />
          </div>

          <div className={styles.filterItems}>
            <div className={styles.inputField}>
              <select
                name="sort"
                value={sortByKey}
                onChange={(event) => {
                  setSortByKey(event.target.value);
                  paginationDispatch({ type: "RESET_PAGE" });
                }}
              >
                <option value={""}>SortBy</option>
                {sortByKeys.map((element) => (
                  <option value={element.value} key={element.key}>
                    {element.key}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputField}>
              <select
                name="status"
                value={todoStatusFilter}
                onChange={(event) => {
                  setTodoStatusFilter(Number(event.target.value));
                  paginationDispatch({ type: "RESET_PAGE" });
                }}
              >
                <option value={-1}>Status</option>
                {statusKeys.map((element) => (
                  <option value={element.value} key={element.key}>
                    {element.key}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.loadingNote}>
          {isLoading ? <p className={styles.loadingText}>Loading...</p> : null}

          {!isLoading && filteredTodoList?.length ? (
            <ul className={styles.todoList}>
              {filteredTodoList?.map((todo) => (
                <TodoElement key={todo.title} data={todo} />
              ))}
            </ul>
          ) : null}

          {!isLoading && !filteredTodoList?.length ? (
            <p className={styles.noTodoNote}>No todo available...</p>
          ) : null}

          <div className={styles.buttons}>
            <button
              onClick={() => paginationDispatch({ type: "PREVIOUS_PAGE" })}
              disabled={pagination.page === todoData?.first}
            >
              Prev
            </button>
            <p>{pagination.page}</p>
            <button
              onClick={() =>
                paginationDispatch({
                  type: "NEXT_PAGE",
                  payload: { lastPage: todoData?.last || 1 },
                })
              }
              disabled={pagination.page === todoData?.last}
            >
              Next
            </button>

            <input
              placeholder="Per page"
              type="number"
              value={pagination.per_page}
              onChange={handlePerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
