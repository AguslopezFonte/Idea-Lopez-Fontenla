import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function NavBar() {
  const { getQuantity } = useContext(CartContext);
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
          {getQuantity() && (
            <NavLink to="/cart">
              <FaCartArrowDown />
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
