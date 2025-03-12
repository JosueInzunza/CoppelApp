import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="../../Logo-coppel.png" alt="logo-coppel" />
        <ul className="nav-bar-items">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;
