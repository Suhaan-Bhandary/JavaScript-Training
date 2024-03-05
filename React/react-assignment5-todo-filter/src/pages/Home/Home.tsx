import { useState } from "react";
import TodoElement from "../../components/TodoElement/TodoElement";
import { Todo } from "../../types/todo";
import styles from "./Home.module.css";

type TodoListProps = {
  todoList: Todo[];
  handleCheckboxToggle: (index: number) => void;
};

const sortByKeys = [
  { key: "Title", value: "title" },
  { key: "Due Date", value: "dueDate" },
] as const;

const statusKeys = [
  { key: "Done", value: 1 },
  { key: "InComplete", value: 0 },
] as const;

const Home = ({ todoList, handleCheckboxToggle }: TodoListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [todoStatusFilter, setTodoStatusFilter] = useState(-1);
  const [sortByKey, setSortByKey] = useState("");

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
  };

  const filteredTodoList = todoList
    .map((todo, index) => ({ ...todo, originalIndex: index }))
    .filter((todo) => {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const lowerCaseTodoTitle = todo.title.toLowerCase();

      if (todoStatusFilter === -1) {
        return lowerCaseTodoTitle.includes(lowerCaseSearchValue);
      } else {
        return (
          Boolean(todoStatusFilter) === todo.isCompleted &&
          lowerCaseTodoTitle.includes(lowerCaseSearchValue)
        );
      }
    });

  if (sortByKey === "title" || sortByKey === "dueDate") {
    filteredTodoList.sort((a, b) => {
      if (a[sortByKey] < b[sortByKey]) return -1;
      else if (a[sortByKey] > b[sortByKey]) return 1;
      return 0;
    });
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
              onChange={handleSearchValueChange}
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

        <div className={styles.todoListContainer}>
          {filteredTodoList?.length !== 0 ? (
            <ul className={styles.todoList}>
              {filteredTodoList?.map((todo) => (
                <TodoElement
                  key={todo.title}
                  index={todo.originalIndex}
                  data={todo}
                  handleCheckboxToggleCallback={handleCheckboxToggle}
                />
              ))}
            </ul>
          ) : (
            <p className={styles.noTodoNote}>No todo available...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
