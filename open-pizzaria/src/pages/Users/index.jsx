import { Link } from 'react-router-dom'
import "./Users.css"
import { useEffect, useState } from 'react'

export default function users() {

  //UseState do react para gerenciar estado dos usuarios
const [usuarios, setUsuarios] = useState([])

//hook use Effect para lidar com efeitos colaterais no componente
useEffect(() => {
 fetch("localhost:3000/users")
 .then((response) => response.json())
 .then ((data) => setUsuarios(data))
 .catch((error) => console.error("Error na API", error))
 
}, [])

  return (
    <main className="containerUsers">
      <h1>Lista de usuarios </h1>
      <Link to="/">Voltar para Home</Link>

      
      <section className="contentUsers"> 
        {usuarios.map ((users) => (
         <article key ={users.id}>
          <strong>Nome: {users.nome}</strong>
           <strong>Email: {users.email}</strong>
          <strong>Telefone: {users.telefone}</strong>

        </article>

      ))}
       

      </section>
    </main>   
  )
}
