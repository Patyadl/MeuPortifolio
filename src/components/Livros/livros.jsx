import React from "react";
import Nav from "../NavBar/nav";
import "../Livros/livros.css"
const Estudos = () => {return (
    <div>
        <Nav />
        <h6 >Portifólio ainda em desenvolvimento</h6>
    <section className={"livros-content"}>
       
       <section className={"livros"}>

       <div className={"livro"}>
            
            <div className={"livroSeguranca"}></div>
                <div id={"nota"}>Meu favorito</div>
                </div>
           
                <div className={"livro"}>
            
            <div className={"livroSistemas"}></div>
            <div id={"nota"}>Recomendo demais</div>
            </div>
        <div className={"livro"}>
            
        <div className={"livroJava"}></div>
        <div id={"nota"}>Um pouco favorito</div>
        </div>
        
      
            <div className={"livro"}>
            
            <div className={"livroRedes"}></div>
                <div id={"nota"}>Menos favorito
                </div>
                </div>
           
      
    </section>
    
    </section>
    </div>
)}
export default Estudos