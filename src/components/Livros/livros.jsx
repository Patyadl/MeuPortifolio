import React from "react";
import Nav from "../NavBar/nav";
import "../Livros/livros.css"
const Estudos = () => {return (
    <div>
        <Nav />
     
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
        <div id={"nota"}>Pareceu até que Java é divertido</div>
        </div>
        
      
            <div className={"livro"}>
            
            <div className={"livroRedes"}></div>
                <div id={"nota"}>Isso aqui é obra prima
                </div>
                </div>
           
      
    </section>
    
    </section>
    </div>
)}
export default Estudos