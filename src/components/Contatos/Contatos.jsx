import React from "react";
import "../Contatos/Contatos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img3 from "../../assets/astro3.png"

const Contatos = () => {
  return (
    <>
      <div className="contato-container">
  
        <div className="contato-card">
          <h1 className="contato-titulo">Entre em Contato</h1>
          <p className="contato-subtitulo">Você pode me encontrar pelas redes abaixo:</p>

          <div className="contato-links">
            <a
              href="https://github.com/Patyadl"
              target="_blank"
              rel="noopener noreferrer"
              className="contato-link"
            >
              <FaGithub size={24} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/patr%C3%ADcia-lucena-02327b234/"
              target="_blank"
              rel="noopener noreferrer"
              className="contato-link"
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
            
          </div>
        </div>
        <img src={img3} alt="Fundo decorativo" className="fundo-imagem3" />
      </div>
    </>
  );
};

export default Contatos;
