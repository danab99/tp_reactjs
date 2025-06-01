import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Acerca de Milu Boutique</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

