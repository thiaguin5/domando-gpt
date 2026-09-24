import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Users.css"

export default function Users() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        fetch("https://domando-gpt-1.onrender.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`)
                }

                return response.json()
            })
            .then((data) => {
                setUsuarios(data)
            })
            .catch((error) => {
                console.error("Erro na API:", error)
            })

    }, [])

    const deletarUsuario = (id) => {

        console.log("ID clicado:", id)

        fetch(`https://domando-gpt-1.onrender.com/users/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`)
                }

                setUsuarios((usuariosAtuais) =>
                    usuariosAtuais.filter((usuario) => usuario.id !== id)
                )
            })
            .catch((error) => {
                console.error("Erro na API:", error)
            })
    }

    return (
        <main className="containerUsers">

            <h1>Lista de Usuários</h1>

            <section className="contentUsers">

                {usuarios.map((user) => (
                    <article key={user.id}>

                        <strong>Nome: {user.nome}</strong>
                        <strong>Email: {user.email}</strong>
                        <strong>Telefone: {user.telefone}</strong>

                        <button
                            className="btn-delete"
                            onClick={() => deletarUsuario(user.id)}
                        >
                            Deletar {user.nome}
                        </button>

                    </article>
                ))}

            </section>

            <Link to="/">Voltar para HOME</Link>

        </main>
    )
}