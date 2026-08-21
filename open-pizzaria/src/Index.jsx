import "./Components/FeedBack"
import ""

const feedbacks = [
    {
        id: 1,
        nome: "João Silva",
        imagem: "https://i.pravatar.cc/80?img=1",
        nota: 5.0,
        comentario:
            "Excelente serviço! Fiquei muito satisfeito com o resultado. Recomendo a todos."
    },
    {
        id: 2,
        nome: "Maria Santos",
        imagem: "https://i.pravatar.cc/80?img=2",
        nota: 4.5,
        comentario:
            "Gostei bastante da experiência. O atendimento foi rápido e muito profissional."
    },
    {
        id: 3,
        nome: "Pedro Oliveira",
        imagem: "https://i.pravatar.cc/80?img=3",
        nota: 5.0,
        comentario:
            "Tudo perfeito desde o início até ao fim. Voltaria a utilizar este serviço sem dúvida."
    },
    {
        id: 4,
        nome: "Ana Costa",
        imagem: "https://i.pravatar.cc/80?img=4",
        nota: 4.0,
        comentario:
            "Muito bom! O resultado ficou exatamente como eu esperava. Apenas demorou um pouco mais do que previsto."
    },
    {
        id: 5,
        nome: "Ricardo Alves",
        imagem: "https://i.pravatar.cc/80?img=5",
        nota: 4.5,
        comentario:
            "Uma ótima experiência. A equipa foi bastante atenciosa e o resultado final ficou excelente."
    }
];

const FeedBack = () => {
    return (
        <section className="feedback-section">

            <h2>O que nossos clientes dizem</h2>

            <div className="feedback-list">

                {feedbacks.map((feedback) => (
                    <article className="feedback-card" key={feedback.id}>

                        <img
                            className="feedback-image"
                            src={feedback.imagem}
                            alt={`Foto de ${feedback.nome}`}
                        />

                        <div className="feedback-content">

                            <h3>{feedback.nome}</h3>

                            <div className="feedback-rating">
                            
                                <strong>{feedback.nota.toFixed(1)}</strong>
                            </div>

                            <p>{feedback.comentario}</p>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
};

export default FeedBack;