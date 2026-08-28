import React from 'react'
import './Comentarios.css'

export default function Comentarios() {


  const Comentarios= [
    {
        id: 1,
        nome: "João Silva",
        imagem: "https://i.pravatar.cc/80?img=1",
        comentario: "daora demais, vou levar minha familia na pizzaria"
        
      
          
    },
    {
        id: 2,
        nome: "Maria Santos",
        imagem: "https://i.pravatar.cc/80?img=2",
        comentario: "tem pizza com borda de chocolate?"
    },
    {
        id: 3,
        nome: "Pedro Oliveira",
        imagem: "https://i.pravatar.cc/80?img=3",
        comentario: "muito bom"
       
    },
    {
        id: 4,
        nome: "Ana Costa",
        imagem: "https://i.pravatar.cc/80?img=4",
        comentario: "como faço para pedir?"
       
    },
    {
        id: 5,
        nome: "Ricardo Alves",
        imagem: "https://i.pravatar.cc/80?img=5",       
        comentario: "como consigo desconto?"
       
           
    }
];

return (
  <section className="Comentarios">

    {Comentarios.map((Comentarios) => (
      <article className="contentBack" key={Comentarios.id}>

        <div className="profile">
          <img
            src={Comentarios.imagem}
            width={60}
            height={60}
            alt={`Foto de ${Comentarios.nome}`}
          />

          <div>
            <h3>{Comentarios.nome}</h3>
          </div>
        </div>

        <div className="Comentarios-content">

          <h2>{Comentarios.comentario}</h2>

          

        </div>

      </article>
    ))}

  </section>
)
}