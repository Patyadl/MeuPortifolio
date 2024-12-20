import React, { useState } from 'react';
import "../NavBar/nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav>
      <h2 id={"logo"}><Link to="/" className={"link"}> Meu <br /> Portifólio </Link></h2>
      <h2 id={"menu"}><Link to="/projetos" className={"link"}>projetos </Link></h2>
      <h2 id={"menu"}><Link to="/estudos" className={"link"}> estudos </Link></h2>
      <h2 id={"menu"}><Link to= "/livros" className={"link"}> livros favoritos </Link></h2>

    </nav>
  )
}

export default Nav;
