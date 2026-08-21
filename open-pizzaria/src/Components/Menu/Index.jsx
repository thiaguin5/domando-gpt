import "./Menu.css"


const Menu = () => {

return (
<nav className="navbar">
  <ul className="menu">
    <li>
      <a href="#">Home</a>
    </li>

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