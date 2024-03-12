import { useDispatch } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "../../app/features/CounterSlice";
import styles from "./CountActions.module.css";

const CountActions = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.CountActions}>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
      <button onClick={() => dispatch(resetCount(0))}>Rest</button>
    </div>
  );
};

export default CountActions;
