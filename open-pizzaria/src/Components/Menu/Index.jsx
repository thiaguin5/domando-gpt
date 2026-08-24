import {Link} from "react-router-dom"
import "./Menu.css"


const Menu = () => {

return (
<nav className="Menu">
  <ul>
    <li>
     <Link to= "/">Home</Link>
    </li>
    <Link to= "/sobre">Sobre</Link>

    <li>
      <a href="#">Sobre</a>
    </li>

    <li className="submenu">
      <a href="#">Cardápio ▾</a>

      <ul className="submenu-list">
        <li>
          <a href="#">Pizzas</a>
        </li>

        <li>
          <a href="#">Bebidas</a>
        </li>

        <li>
          <a href="#">Sobremesas</a>
        </li>
      </ul>
    </li>

    <li>
      <a href="#">Fale conosco</a>
    </li>

    <li>
      <a href="#">FAQ</a>
    </li>
  </ul>
</nav>







)

}


export default Menu