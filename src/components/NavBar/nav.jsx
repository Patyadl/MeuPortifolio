import React from 'react';
import "../NavBar/nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "link active" : "link";

  return (
    <nav>
      <h2 id="logo">
        <Link to="/" className={isActive("/")}>
          Meu <br /> Portifólio
        </Link>
      </h2>

      <h4>
        
        <Link to="/jornada" className={isActive("/jornada")}>
          Minha jornada
        </Link>
      </h4>
      <h4>
        <Link to="/projetos" className={isActive("/projetos")}>
          Projetos
        </Link>
      </h4>
      <h4>
        <Link to="/livros" className={isActive("/livros")}>
          Livros favoritos
        </Link>
      </h4>
      <h4>
        <Link to="/cargo" className={isActive("/cargo")}>
          Cargo atual
        </Link>
      </h4>
      <h4>
        <Link to="/contatos" className={isActive("/contatos")}>
          Contatos
        </Link>
      </h4>
    
    </nav>
  );
};

export default Nav;
