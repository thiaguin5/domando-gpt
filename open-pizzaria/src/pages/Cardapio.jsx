
import "./Cardapio.css";

const pizzas = [
  {
    nome: "Calabresa",
    descricao: "Molho de tomate, mussarela, calabresa fatiada e cebola.",
    preco: "R$ 42,90",
  },
  {
    nome: "Mussarela",
    descricao: "Molho de tomate, mussarela, tomate e orégano.",
    preco: "R$ 39,90",
  },
  {
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado, mussarela e Catupiry.",
    preco: "R$ 46,90",
  },
  {
    nome: "Portuguesa",
    descricao: "Presunto, ovos, cebola, milho, ervilha e azeitona.",
    preco: "R$ 47,90",
  },
];

function Cardapio() {
  return (
    <div className="pagina">

      <header className="cabecalho">
        <div className="icone">🍕</div>

        <h1>Cardápio</h1>

        <p>Escolha sua pizza favorita!</p>
      </header>

      <main className="container">

        <section className="categoria">

          <h2>🍕 Pizzas</h2>

          {pizzas.map((pizza) => (
            <div className="card-pizza" key={pizza.nome}>

              <div className="informacoes">
                <h3>{pizza.nome}</h3>

                <p>{pizza.descricao}</p>
              </div>

              <strong className="preco">
                {pizza.preco}
              </strong>

            </div>
          ))}

        </section>

        <section className="categoria">

          <h2>🥤 Bebidas</h2>

          <div className="card-pizza">

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

          <div className="card-pizza">

            <div className="informacoes">
              <h3>Água 500ml</h3>

              <p>
                Água mineral sem gás.
              </p>
            </div>

            <strong className="preco">
              R$ 4,00
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