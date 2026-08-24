import Header from "./Components/Header/index";
import Footer from "./Components/Footer/Index";
import Menu from "./Components/Menu/Index";
import Router from "./Router";
import "./Global.css";


function App() {
  return (
    <div className="container">
      <Header
        titleHeader="🍕 Seja bem-vindo à Open Pizzaria!"
        textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento ainda mais saboroso!"
      />

     

      <Router />

     
      <Footer titleFooter="Open pizzaria - Todos os direitos reservados - 2026" />
    </div>
  );
}

export default App;