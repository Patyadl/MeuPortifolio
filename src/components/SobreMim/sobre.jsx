import React from "react";
import Nav from "../NavBar/nav";
import "../SobreMim/sobre.css";
const Sobre = ({ isExpanded }) => {return (
    <div  className={`about-me ${isExpanded ? 'expanded' : ''}`}>
        <Nav />
        <h6 >Portifólio ainda em desenvolvimento</h6>
<section className={"sobre-content"}>

<div className={"sobre2"}>

<div className={"sobre3"}>
    <h4 >Nome completo: <span id={"infos"}> Patrícia Ester Albuquerque de Lucena</span></h4>
    <h4>Idade: <span id={"infos"}> 21 anos</span></h4>
    <h4>Cargo atual: <span id={"infos"}> Estágio com robótica e programação  </span></h4>
    <h4>Formação: <span id={"infos"}> Cursando ensino superior</span></h4>
    <h4>Outros idiomas: <span id={"infos"}> Inglês </span></h4>
    <h4>Tecnologias dominantes: <span id={"infos"}>Java , React , SpringBoot , Css, JS , Express e Node</span></h4>

    </div>
<div>
<div className={"avatarSobre"}></div>
<div className="links">

<a id={"linkGithub"}  href="https://www.linkedin.com/in/patr%C3%ADcia-lucena-02327b234/"><div className="github"></div></a>
<a id={"linkLinkedin"}  href="https://www.linkedin.com/in/patr%C3%ADcia-lucena-02327b234/"><div className="linkedin"></div></a>
</div>

</div>
</div>

</section>

    </div>
)}
export default Sobre