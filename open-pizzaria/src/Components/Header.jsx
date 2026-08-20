import "./Header.css"

const Header = (props) => {
  console.log (props);
return (
<>
 <header className="header">
        <h1>{props.titleHeader}</h1>
        <p>{props.textHeader}

          
          As melhores pizzas, preparadas com carinho para deixar seu momento
          ainda mais saboroso!
        </p>
      </header>
      <hr className= "divider" />

</>
  
)
}

export default Header ;