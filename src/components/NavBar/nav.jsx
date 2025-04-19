import React from 'react';
import "../NavBar/nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
 

  return (
    <nav>
      <h2 id={"logo"}><Link to="/" className={"link"}> Meu <br /> Portifólio </Link></h2>
            <h4 ><Link to= "/jornada" className={"link"}> Minha jornada </Link></h4>
            <h4><Link to= "/projetos" className={"link"}> Projetos </Link></h4>
            <h4 id={"menu"}><Link to= "/livros" className={"link"}> Livros favoritos </Link></h4>
             <h4 id={"menu"}><Link to= "/cargo" className={"link"}> Cargo atual </Link></h4>
             <h4 id={"menu"}><Link to= "/contatos" className={"link"}> Contatos </Link></h4>
        

    </nav>
  )
}

export default Nav;
