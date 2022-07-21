import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/guitarras">
              Guitarras
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/ukeleles">
              Ukeleles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/bajos">
              Bajos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/baterias">
              Baterias
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/pianos">
              Pianos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
