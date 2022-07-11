
import './NavBar.css';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
      <header className='header'>
        <nav>
          <ul>
            <li><NavLink activeClassName='active'to='/home'>Home</NavLink></li>
            <li><NavLink activeClassName='active'to='/productos'>Productos</NavLink></li>
          </ul>
        </nav>
          <button>Home</button>
          <p>Nosotros</p>
          <a src="#">Tienda</a>
        
      </header>
  );
}

export default NavBar;
 