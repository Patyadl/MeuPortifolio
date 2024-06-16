import React from "react";
import Nav from "../NavBar/nav";
import "../Projects/projects.css"
const Project = () => {return (
    <div>
        <Nav />
    
     <section className={"projetoStart"}>
        <div className={"start"}></div>
     <div className={"projetoNear"}></div>
     <h1 id={"txt"}>Participei do projeto Start em 2022 e foi a minha primeira experiência com o mundo 
     da programação. Um projeto bastante enriquecedor, em parceria com a Rede Cidadã e outras empresas
     como a Accenture. Lá aprendi um pouco de tudo: Lógica de programação, Html, Css, Java, Fazer amigos
     e construir um projeto.</h1>
     </section>

     <section className={"universidade"}>
    <h1 id={"txt"}>Em 2022.2 entrei a Universidade Católica de Pernambuco e estou cursando o quarto período
    de Sistemas Para Internet.</h1>
    <div className={"embarque"}></div>
    <div className={"unicap"}></div>
     </section>

     <section className="universidade-projetos">
     <h1 id="txt">Durante os períodos, pude participar do desenvolvimento de outros projetos que super
                me enriqueceram profissionalmente.</h1>
                <div className="images">
                    
                    <div className="projetoBora"></div>
                    <div className="projetoConfeit"></div>
                </div>
                <div className="projetoFC"></div>
            </section>
    </div>
)}
export default Project