import React, {useState} from "react";
import Nav from "../NavBar/nav";
import "../Projects/projects.css"
const Project = () => {

    const [overlayContent, setOverlayContent] = useState("")
    const [isOverlayVisible, setOverlayVisible] = useState(false)

    const handleOverlay = (props) => {
        setOverlayContent(props)
        setOverlayVisible(true)
    }

    const closeOverlay = () => {
        setOverlayVisible(false);
    }

    return (
    <div>

        <Nav />
        <div className="Projetos">

     <section className={"projetoStart-container"} onClick={() => handleOverlay("Participei do projeto Start em 2022 e foi a minha primeira experiência com o mundo da programação. Um projeto bastante enriquecedor, em parceria com a Rede Cidadã e outras empresas como a Accenture. Lá aprendi um pouco de tudo: Lógica de programação, Html, Css, Java, Fazer amigos e construir um projeto.")}>
                <div className="projetoStart">

                <div className={"start"}></div>
                <div className={"projetoNear"}></div>
                </div>
                <h1 id={"txt"}>Participei do projeto Start em 2022...</h1>
            </section>

     <section className={"universidade-container"} onClick={ () => handleOverlay( " Em 2022.2 entrei na Universidade Católica de Pernambuco e estou cursando o quinto período de Sistemas Para Internet.")}>
 

    <h1 id={"txt"}>Em 2022.2 entrei na UNICAP...</h1>
    <div className="universidade">
    <div className={"embarque"}></div>
    <div className={"unicap"}></div>
    </div>
     </section>

     <section className="universidade-projetos" onClick={ () => handleOverlay( " Durante os períodos, pude participar do desenvolvimento de outros projetos que super me enriqueceram profissionalmente.")}>
     <h1 id="txt">Durante os períodos...</h1>
                <div className="images">
                    
                    <div className="projetoBora"></div>
                    <div className="projetoConfeit"></div>
                    <div className="projetoFC"></div>
                </div>
                
                
               
            </section>
            </div>
            {isOverlayVisible && (
                 <div id="overlay" className="overlay">
                 <div className="overlay-content">
                     <span id="close-btn" onClick={closeOverlay}>&times;</span>
                     <p>{overlayContent}</p>
                 </div>
                 </div>
            )}
    </div>
)}
export default Project