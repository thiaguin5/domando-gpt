import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>

        <li className="submenu">
          <Link to="/cardapio">
            Cardápio ▾
          </Link>

          <ul className="submenu-list">

            <li>
              <Link to="/cardapio">Pizzas</Link>
            </li>

            <li>
              <Link to="/cardapio">Bebidas</Link>
            </li>

            <li>
              <Link to="/cardapio">Sobremesas</Link>
            </li>

          </ul>
        </li>

        <li>
          <Link to="/contato">
            Fale conosco
          </Link>
        </li>

        <li>
          <Link to="/faq">
            FAQ
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Menu;