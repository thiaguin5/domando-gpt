import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

export default function Users() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error("Erro na API", error))
  }, [])

  console.log(usuarios)

  return (
    <main className="containerUsers">
      <h1>Lista de Usuários</h1>
      <Link to="/">Voltar para Home</Link>

      <section className="contentUsers">
        {usuarios.map(user => (
          <article key={user.id}>
            <strong>Nome: </strong> <span>{user.nome}</span>
            <strong>Email: </strong> <span>{user.email}</span>
            <strong> Telefone: </strong> <span>{user.telefone}</span>
          </article>
        ))}
      </section>
    </main>
  )
}