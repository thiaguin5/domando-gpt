import "./Feedback.css";

const Feedback = () => {
  return (
    <section className="container-feedback">
      <div className="feedback-box">
        <h1>Feedback</h1>

        <p className="feedback-intro">
          Nosso feedback é muito importante para nós!
        </p>

        <p>
          Se você tiver alguma sugestão, dúvida ou elogio, preencha o formulário
          abaixo. Agradecemos por compartilhar sua opinião conosco!
        </p>

        <form className="feedback-form">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="avaliacao">Avaliação</label>
          <select id="avaliacao">
            <option value="">Selecione uma avaliação</option>
            <option value="5">⭐⭐⭐⭐⭐ Excelente</option>
            <option value="4">⭐⭐⭐⭐ Muito bom</option>
            <option value="3">⭐⭐⭐ Bom</option>
            <option value="2">⭐⭐ Regular</option>
            <option value="1">⭐ Ruim</option>
          </select>

          <label htmlFor="mensagem">Seu feedback</label>
          <textarea
            id="mensagem"
            rows="5"
            placeholder="Digite aqui sua sugestão, dúvida ou elogio..."
          ></textarea>

          <button type="submit">Enviar Feedback</button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;

