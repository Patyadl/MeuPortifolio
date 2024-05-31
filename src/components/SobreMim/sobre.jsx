import React from "react";
import Nav from "../NavBar/nav";
import "../SobreMim/sobre.css"
const Sobre = ({ isExpanded }) => {return (
    <div  className={`about-me ${isExpanded ? 'expanded' : ''}`}>
        <Nav />

<section className={"sobre-content"}>

<div className={"sobre2"}>

<div className={"sobre3"}>
    <h2 >Nome completo: <span id={"infos"}> Patrícia Ester Albuquerque de Lucena</span></h2>
    <h2>Idade: <span id={"infos"}> 21 anos</span></h2>
    <h2>Cargo atual: <span id={"infos"}> Estágio com robótica e programação  </span></h2>
    <h2>Formação: <span id={"infos"}> Cursando ensino superior</span></h2>
    <h2>Outros idiomas: <span id={"infos"}> Inglês </span></h2>
    <h2>Tecnologias dominantes: <span id={"infos"}>Java , React , SpringBoot , Css, JS , Express e Node</span></h2>

    </div>
<div>
<div className={"avatarSobre"}></div>
<a id={"linkGithub"}  href="https://github.com/Patyadl">Meu Github</a>
</div>
</div>

</section>

    </div>
)}
export default Sobre