import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import TodoElement from "../../components/TodoElement/TodoElement";
import { BASE_TODOS_URL } from "../../constants/urls";
import useFetch from "../../hooks/useFetch";
import { Todo } from "../../types/todo";
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

  const todosUrl = new URL(BASE_TODOS_URL);
  todosUrl.searchParams.set("_sort", sortByKey);
  if (todoStatusFilter !== -1) {
    todosUrl.searchParams.set("isCompleted", String(todoStatusFilter));
  }

  const [todoList, isLoading, isError] = useFetch<Todo[]>(
    todosUrl.href,
    ["todo-list", sortByKey, todoStatusFilter],
    () => toast.error("Error while loading todo list"),
  );

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
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>

          <div className={styles.filterItems}>
            <div className={styles.inputField}>
              <select
                name="sort"
                value={sortByKey}
                onChange={(event) => {
                  setSortByKey(event.target.value);
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
        </div>
      </div>
    </div>
  );
};

export default Home;
