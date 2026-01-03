import React from "react";
import Nav from "../NavBar/nav";
import "../Livros/livros.css";

const Estudos = () => {
  return (
    <div className="livros-page">
      <Nav />

      <main className="livros-content">
        <section className="livros">

          
          <div className="livro">
            <div className="livroSeguranca"></div>

            <div className="livro-info">
              <p className="opiniao">
                Um livro essencial para entender os fundamentos de segurança da
                informação de forma clara e prática.
              </p>
              <div id="nota">Meu favorito</div>
            </div>
          </div>

         
          <div className="livro">
            <div className="livroSistemas"></div>

            <div className="livro-info">
              <p className="opiniao">
                Um livro que assusta pela quantidade de páginas, mas traz vários
                estudos de caso, tornando a leitura mais dinâmica. Sempre dá para
                aprender algo novo sobre o cérebro computacional.
              </p>
              <div id="nota">Recomendo demais</div>
            </div>
          </div>

          
          <div className="livro">
            <div className="livroJava"></div>

            <div className="livro-info">
              <p className="opiniao">
                Usei este livro como apoio para dúvidas de nível mais avançado.
                As explicações me ajudaram a entender melhor mesmo quando tudo
                parecia perdido. Foi aqui que entendi o real potencial do Java.
              </p>
              <div id="nota">Pareceu até que Java é divertido</div>
            </div>
          </div>

       
          <div className="livro">
            <div className="livroRedes"></div>

            <div className="livro-info">
              <p className="opiniao">
                Redes é um tema complexo e o livro também assusta pelo tamanho,
                mas faz conexões tão bem construídas que acabei gostando da área.
                Confesso que ainda não consegui finalizar a leitura.
              </p>
              <div id="nota">Isso aqui é obra-prima</div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Estudos;
