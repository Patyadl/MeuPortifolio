import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container-home">
      <div className="left-side">
        <section className="icones-container">
          <section className="icones">
            <h6>Portifólio ainda em desenvolvimento</h6>
            <section className="icone">
              <div className="imgCyber"></div>
            </section>
            <section className="icones1-content">
              <div className="imgJava"></div>
              <div className="imgSpring"></div>
              <div className="imgReact"></div>
              <div className="imgJS"></div>
            </section>
            <section className="icones2-content">
              <div className="imgTailwind"></div>
              <div className="imgFlex"></div>
              <div className="imgData"></div>
              <div className="imgSql"></div>
          
            </section>
          </section>
        </section>

<div className="bt">
<button id="bt"><Link to="/projetos" className={"link"}>Saiba mais </Link></button>
</div>
       
      </div>


      <div className="right-side">
        <div className="container-sobreMim">
          <div className="sobreMim">
          <div>
<div className={"avatarSobre"}>
    
</div>
<h3 id="funcao">Desenvolvedora Web</h3>

<div className="links">

<a id={"linkGithub"}  href="https://github.com/Patyadl"><div className="github"></div></a>
<a id={"linkLinkedin"}  href="https://www.linkedin.com/in/patr%C3%ADcia-lucena-02327b234/"><div className="linkedin"></div></a>
</div>

</div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
