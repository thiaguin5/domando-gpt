import React from 'react'
import './Not.css'

export default function Index() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi removida.</p>

        <a href="/" className="back-button">
          Voltar para o início
        </a>
      </div>
    </div>
  )
}
