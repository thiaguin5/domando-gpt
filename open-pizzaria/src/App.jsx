import Header from "./Components/Header/index";
import Cards from "./Components/Cards/Index";
import Banner from "./Components/Banner/Index";
import Footer from "./Components/Footer/Index";
import Menu from "./Components/Menu/Index";
import FeedBack from "./Components/FeedBack/Index";
import "./Global.css";

function App() {
  return (
    <div className="container">
      <Header
        titleHeader="🍕 Seja bem-vindo à Open Pizzaria!"
        textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento ainda mais saboroso!"
      />

      <Menu />

      <Banner />

      <Cards />

      <FeedBack />

      <Footer titleFooter="Open pizzaria - Todos os direitos reservados" />
    </div>
  );
}

export default App;