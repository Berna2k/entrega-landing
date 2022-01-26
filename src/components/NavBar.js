import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar-nav">
        <ul>
            <li>
            <a href="index.html">Inicio</a>
            </li>
            <li>Galeria</li>
            <li>Delivery</li>
            <li>Sabores</li>
            <li>Contacto</li>
            <li><CartWidget /></li>
        </ul>
    </nav>
    );
}

export default NavBar;