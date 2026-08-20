import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Banner from "./Components/Banner";
import Footer from "./Components/footer";
import Menu from "./Components/Menu";
import "./Global.css"



function App() {

return (

  <div className="container">

    <Header titleHeader="🍕 Seja bem-vindo à Open Pizzaria!"
    textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento
          ainda mais saboroso!"/>

    <Menu/>

    <Banner  />

    <Cards />

    <Footer titleFooter = " Open pizzaria - Todos os direitos reservados new"/>


  </div>
)



}

  
export default App;
