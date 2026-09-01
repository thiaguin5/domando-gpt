import React, { useState } from 'react'
import "./Cadastro.css"
export default function index() {

    const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  //função para atualizar o estado ao digitar no formulario 

  const handleChange  = (event) => {
    const {name, value }= event.target;
    console.log(nome,value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:value,
    }))


  }

  //funcao para enviar o formulario

  const handleSubmit = (e) => {
    e.preventdefault()
   console.log("Enviar .....")
  }


  return (
     <main className="containerCadastro">
        <h1>Cadastro de usuários</h1>
        <form onSubmit = {handleSubmit}>
            <article className="form-control">
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Digite seu nome"
                    value={formData.nome}
                     onChange= {handleChange}
             
                />
            </article>

        <article className="form-control">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite seu Email"
                    value={formData.email}
                />
            </article>

       <article className="form-control">
                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="tel" 
                    name="telefone" 
                    placeholder="Digite seu telefone"
                    value={formData.telefone}
                />
            </article>

         <br />
            <button>Cadastrar</button>

    </form>


   </main>
  )
}
