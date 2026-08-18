import Header from "./assets/Components/Header";



function App() { 

  return (
    <>

    <Header/>
     
      
      <hr />

      <section className="banner">
        <img
          src="https://placehold.co/1000x300"
          alt="Banner da Open Pizzaria"
          width="1000"
          height="300"
        />
      </section>

      <section>
        <article>
          <h1>🍕 Nossas Pizzas</h1>
          <p>
            Na Open Pizzaria, você encontra pizzas deliciosas, preparadas com
            ingredientes selecionados e muito sabor. Escolha seu sabor favorito
            e aproveite!
          </p>
        </article>

        <article>
          <h1>🔥 Feitas para Você</h1>
          <p>
            Nossa massa é preparada com carinho e nossas pizzas saem
            quentinhas do forno para chegar até você com aquele sabor
            irresistível.
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
