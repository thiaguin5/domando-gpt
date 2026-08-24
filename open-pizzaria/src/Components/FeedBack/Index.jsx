import "./FeedBack.css"
import estrela from "../../assets/estrela.png"

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
    },
    {
        id: 6,
        nome: "Robertão Saraiva",
        imagem: "https://i.pravatar.cc/80?img=10",
        nota: 3,
        comentario:
            "Muito Bom!"
    }
];

const FeedBack = () => {
    
    console.log(feedbacks)

    return (
        <section className="feedBack">
            {feedbacks.map((feedback) => 
                <article className="contentBack" key={feedback.id}>
                    <img 
                        src={feedback.imagem}
                        width={80}
                        height={80} 
                        alt={`Foto de ${feedback.nome}`} 
                    />

                    <h1>{feedback.nome}</h1>

                    <img 
                        src={estrela} 
                         width="30" 
                         height="30"
                         alt=""
                    />

                    <strong>
                        {feedback.nota.toFixed(1)}
                    </strong>

                    <p>
                        {feedback.comentario}
                    </p>
                </article>
            )}

        </section>

        // <section className="feedBack">
        //     <article className="contentBack">
        //         <img src="https://fastly.picsum.photos/id/324/80/80.jpg?hmac=_Ql1z2HqWLqlbzGE5FQVw101OlNM-KCJ6pPbp9_eC4w" alt="" />
        //         <h1>
        //             Lorem Ipsum
        //         </h1>
        //         <img src={estrela} width="30" height="30" alt="" />
        //         <strong>5.0</strong>
        //         <p>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis at omnis, quisquam fugiat sint repudiandae vel! Assumenda error quas nulla. Consectetur facere consequatur neque maiores voluptatibus nam ipsum nemo delectus.
        //         </p>
        //     </article>
        // </section>
    )
}

export default FeedBack;