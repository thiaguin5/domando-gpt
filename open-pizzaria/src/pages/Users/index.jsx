import { Link } from 'react-router-dom'
import "./Users.css"
import { useEffect, useState } from 'react'

export default function users() {

  //UseState do react para gerenciar estado dos usuarios
const [usuarios, setUsuarios] = useState([])

//hook use Effect para lidar com efeitos colaterais no componente
useEffect(() => {
  console.log("olaaaa")

}, [])

  return (
    <main className="containerUsers">
      <h1>Lista de usuarios </h1>
      <Link to="/">Voltar para Home</Link>
      <section className="contentUsers">
        <article>
          <strong>Nome: kaio</strong>
          <strong>Telefone: 12121-12121</strong>

        </article>


      </section>
    </main>
  )
}
