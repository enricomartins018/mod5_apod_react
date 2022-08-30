import React from 'react'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
        <h1>APOD NASA</h1>
        <h2>Exercício da semana 4 do módulo 5 da Resilia Educação</h2>
    </header>
  )
}

export default Header