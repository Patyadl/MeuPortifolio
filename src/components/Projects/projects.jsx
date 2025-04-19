import React, { useState } from "react";
import Nav from "../NavBar/nav";
import "../Projects/projects.css";

const Project = () => {
  const [overlayContent, setOverlayContent] = useState({ descricao: "", descricao2: "", imagem: "" });
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOverlay = (descricao, descricao2, imagem) => {
    setOverlayContent({ descricao, descricao2, imagem });
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const projetos = [
    {
      titulo: "Near - Meu primeiro projeto",
      imagem: "projetoNear",
      descricao: "Meu primeiro projeto, o Near, foi uma loja virtual que permitia localizar produtos próximos ao usuário e encontrar a loja onde estavam disponíveis. Durante o desenvolvimento, aprendi HTML, CSS e mexi um pouco com Java. Pratiquei bastante lógica de programação e trabalhei intensamente na resolução de desafios. Foi o início da minha jornada no mundo de T.I. e um marco importante para o meu aprendizado em equipe.",
      descricao2: "Resultado final: aprendi HTML, CSS, trabalho em equipe e lógica de programação.",
    },
    {
      titulo: "Bora?",
      imagem: "projetoBora",
      descricao: "O projeto 'Bora?' foi desenvolvido no meu primeiro período da graduação na UNICAP. Eu já tinha conhecimento sobre metodologias ágeis, mas foi aqui que realmente coloquei em prática. Além disso, entendi o quão valioso é focar na usabilidade do usuário. Aqui não teve código, mas um protótipo lindo construído em equipe.",
      descricao2: "Resultado final: experiência com metodologias ágeis e design centrado no usuário.",
    },
    {
      titulo: "Projeto para a Ferreira Costa",
      imagem: "projetoFC",
      descricao: "Sistema interno de organização e controle de tarefas para a empresa Ferreira Costa, solicitado em parceria com o porto digital. Aqui desenvolvi esse card exibido. Foi aqui que aprendi React, flexbox e grid. O mundo da programação mudou para mim, quando aprendi de fato como as páginas se comunicam até se formar um site. Foi uma jornada rápida de 3 meses, mas bastante interessante.",
      descricao2: "Resultado final: aprendi React, criar estados e  Responsividade com flexbox.",
    },
    {
      titulo: "ConfeitArt",
      imagem: "projetoConfeit",
      descricao: "O ConfeitArt tinha como objetivo concentrar cursos de confeitaria, desde o básico até o avançado. Foi aqui que decidi que sou backend 😁. Conheci o famoso Springboot e desenvolvi um banco de dados para o projeto, além de ajudar o frontend também utilizando React.",
      descricao2: "Resultado final: Programei o backend do projeto com Springboot e Postgresql.",
    },
    {
      titulo: "WayClient",
      imagem: "projetoWayClient",
      descricao: "O WayClient foi o último projeto durante a minha graduação. Ele era voltado para CRM, com o objetivo de ajudar qualquer tipo de empresa a se organizarem internamente e externamente. Aqui foi um trabalho incrível criado em equipe e com a parceria de um cliente real. Aqui pude observar os diversos estágios que uma aplicação tem para se tornar funcional, desde pequenos serviços a grandes módulos integrados. Durante o desenvolvimento, aprendi sobre planejamento estratégico, criação de funcionalidades, testes e implementação. Trabalhar com um cliente real trouxe uma perspectiva prática valiosa, permitindo entender melhor as necessidades empresariais e adaptar o projeto a elas. Foi uma experiência enriquecedora tanto no aspecto técnico quanto no trabalho em equipe, consolidando habilidades essenciais para o mercado de T.I. e fortalecendo minha paixão por desenvolver soluções que fazem a diferença.🚀",
      descricao2: "Resultado final: prática com CRUD, banco de dados, React e APIs.",
    },
    {
      titulo: "Machine Learning",
      imagem: "projetoML",
      descricao: "Reconhecimento de padrões usando Python e bibliotecas como Scikit-learn. O projeto também conheci durante o ultimo sementres da minha graduação. O seu objetivo  foi de analisar os índices de criminalidade em Pernambuco e se eles afetam nos índices de educação.",
      descricao2: "Resultado final: aprendizado de modelos supervisionados e pré-processamento de dados.",
    }
  ];

  return (
    <div>
      <Nav />

      <div className="grid-container">
        {projetos.map((proj, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleOverlay(proj.descricao, proj.descricao2, proj.imagem)}
          >
            <div className={`imgProjeto ${proj.imagem}`}></div>
            <p className="tituloProjeto">{proj.titulo}</p>
          </div>
        ))}
      </div>
      

      {isOverlayVisible && (
        <div id="overlay" className="overlay">
          <div className="overlay-content">
            <span id="close-btn" onClick={closeOverlay}>
              &times;
            </span>
            <div className={`imgProjetoGrande ${overlayContent.imagem}`}></div>
            <p>{overlayContent.descricao}</p>
            <p><strong>{overlayContent.descricao2}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
