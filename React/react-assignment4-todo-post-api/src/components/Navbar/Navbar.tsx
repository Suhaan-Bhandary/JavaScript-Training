import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/" className={styles.title}>
        <h2>Todo Application</h2>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
