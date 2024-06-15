import React from "react";
import Nav from "../NavBar/nav";
import "../Estudos/estudos.css"
const Estudos = () => {return (
    <div className="estudos">
        <Nav  />
        <section className={"titulo-content"}>
        <h3 id={"tituloEstudos"}>Dediquei esta página para mostrar meus pontos de vista sobre meus estudos 
        e como implemento  o que aprendi.
            </h3>
        </section>
     
        <section className={"assuntos"}>
        <div className={"background"}>
      <div className={"jsversusruby"}>
        <div className={"imgRuby"}></div>

        <div className="versus-content">
        <div className="imgVersus"></div>
        </div>
    
        <div className={"imgJS"}></div>

        </div>
        
       <p id={"texto"}>qualquer coisa</p>  </div>

       <div className={"background"}>
        <div className={"responsividade"}>
        <div className={"imgFlex"}></div>
    
</div>
<p id={"texto"}>qualquer coisa <a id={"link"} href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">css tricks</a> </p> 
        </div>

        <div className={"background"}>
      <div className={"udemy"}>
      <div className={"imgJava"}></div>

        <div className="versus-content">
        <div className="imgVersus"></div>
        </div>
    
        <div className={"imgReact"}></div>

        </div>
        
       <p id={"texto"}>qualquer coisa</p>  </div>

        </section>

    </div>
)}
export default Estudos