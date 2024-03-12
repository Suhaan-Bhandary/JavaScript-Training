import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./DisplayCount.module.css";

const DisplayCount = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div className={styles.DisplayCount}>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default DisplayCount;
