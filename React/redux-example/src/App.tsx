import CountActions from "./components/CountActions/CountActions";
import DisplayCount from "./components/DisplayCount/DisplayCount";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>Redux Example</h1>
      <DisplayCount />
      <CountActions />
    </div>
  );
}

export default App;
