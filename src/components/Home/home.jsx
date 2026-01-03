import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container-home">

  <div className="container">

   
    <section className="topo">
      <div className="menu">
        <h3>Meu <br /> portifólio</h3> 
        <h5><Link to="/jornada" className="link">Minha jornada</Link></h5>
        <h5><Link to="/projetos" className="link">Projetos</Link></h5>
        <h5><Link to="/livros" className="link">Livros favoritos</Link></h5>
        <h5><Link to="/cargo" className="link">Cargo atual</Link></h5>
        <h5><Link to="/contatos" className="link">Contatos</Link></h5>
      </div>

      <div className="Centralizar_minhaFoto">
        <div className="minhaFoto"></div>
      </div>
    </section>

 
    <section className="centralizar-linguagens">
      <div className="linguagens_ferramentas">
        <div className="linguagens_ferramentas_1">
          <div className="java"></div>
          <div className="spring"></div>
          <div className="js"></div>
        </div>

        <div className="linguagens_ferramentas_2">
          <div className="react"></div>
          <div className="tailwind"></div>
          <div className="postgre"></div>
        </div>
      </div>
    </section>
     
  </div>
  <div className="astronauta"></div>
</div>
  );
};

export default Home;
