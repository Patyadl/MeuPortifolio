import React from 'react';
import "../NavBar/nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
 

  return (
    <nav>
      <h2 id={"logo"}><Link to="/" className={"link"}> Meu <br /> Portifólio </Link></h2>
            <h4><Link to= "/jornada" className={"link"}> Minha jornada </Link></h4>
            <h4>Projetos</h4>
            <h4 id={"menu"}><Link to= "/livros" className={"link"}> Livros favoritos </Link></h4>
            <h4>Cargo atual</h4>
            <h4>Contatos</h4>

    </nav>
  )
}

export default Nav;
