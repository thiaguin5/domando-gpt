import "./Cardapio.css";

const pizzas = [
  {
    nome: "Calabresa",
    descricao: "Molho de tomate, mussarela, calabresa fatiada e cebola.",
    preco: "R$ 42,90",
    imagem: "/imagens/cala.png",
  },
  {
    nome: "Mussarela",
    descricao: "Molho de tomate, mussarela, tomate e orégano.",
    preco: "R$ 39,90",
    imagem: "/imagens/mus2.jpg",
  },
  {
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado, mussarela e Catupiry.",
    preco: "R$ 46,90",
    imagem: "/imagens/fra.png",
  },
  {
    nome: "Portuguesa",
    descricao: "Presunto, ovos, cebola, milho, ervilha e azeitona.",
    preco: "R$ 47,90",
    imagem: "/imagens/port.png",
  },
];
function Cardapio() {
  return (
    <div className="pagina">

      <header className="cabecalho">
        <div className="icone"></div>

        <h1>Nosso Cardápio</h1>

        <br />
        <br />
        <br />

       
      </header>

      <main className="container">

        <section className="categoria">

          <h2>Pizzas</h2>
          <br />

          <div className="lista-pizzas">

            {pizzas.map((pizza) => (
              <div className="card-pizza" key={pizza.nome}>

                <img
                  src={pizza.imagem}
                  alt={`Pizza de ${pizza.nome}`}
                  className="imagem-pizza"
                />

                <div className="informacoes">
                  <h3>{pizza.nome}</h3>

                  <p>{pizza.descricao}</p>
                </div>

                <strong className="preco">
                  {pizza.preco}
                </strong>

              </div>
            ))}

          </div>

        </section>

        <section className="categoria">

          <h2>Bebidas</h2>
          <br />
          

          

          <div className="card-pizza">

            <img
               src="/imagens/refri.jpg"
              alt="Refrigerantes"
              className="imagem-pizza"
            />

            <div className="informacoes">
              <h3>Refrigerante 2L</h3>

              <p>
                Coca-Cola, Guaraná ou Fanta.
              </p>
            </div>

            <strong className="preco">
              R$ 12,00
            </strong>

          </div>

        </section>
        <a
          className="botao"
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
        >
          📲 Pedir pelo WhatsApp
        </a>

      </main>

      <footer>
        <p>© 2026 — Todos os direitos reservados.</p>

        <p>
          📍 Rua das Pizzas, 123 — São Paulo
        </p>
      </footer>

    </div>
  );
}

export default Cardapio;

