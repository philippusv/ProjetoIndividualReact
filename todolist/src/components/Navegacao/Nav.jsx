import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar-nav">
      <ul className="navbar">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/tarefa">Tarefas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
