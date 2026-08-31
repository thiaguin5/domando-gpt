import React, { useState } from 'react'
export default function index() {

    const [formdata, setData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });


  return (
   <main className='containerCadastro'>
    <h1>Cadastro de usuarios</h1>
    <form >
        <article className='form-control'>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text"
             name="nome"/>
             

          
        </article>

        <article className='form-control'>
            <label htmlFor="gmail">gmail</label>
            <input 
            type="gmail" 
            name="gmail" />


        </article>

        <article className='form-control'>
            <label htmlFor="telefone">telefone</label>
            <input
             type="telefone"
              name="telefone" />


        </article>


        

         <br />
            <button>Cadastrar</button>

    </form>


   </main>
  )
}
