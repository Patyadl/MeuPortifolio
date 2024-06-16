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
        
       <p id={"texto"}>Talvez com a imagem acima parece que quero comparar a sintaxe entre elas, mas não é isso.
        Recentemente comecei como o uso de uma determinada linguagem influencia na velociadade da aplicação. Bom, o Ruby com certeza
        não facilida muito. Entender a estrutura de um projeto que você vai trabalhar antes de começar a programar é essencial
        para um bom desenvolvimento. Quando eu entendi que saber uma linguagem de programação não é apenas saber codar nela e sim 
        também entender como ela funciona na sua máquina, foi o estopim para eu começar a estudar de maneira mais acertiva. <br />
        Meu primeiro estudo, e não o último, foi relacionando Ruby com JavaScript. Conheci Ruby por acaso e comecei a codar apenas por diversão.
        Achei interessante pesquisar sobre pois queria integrar o Ruby a um projeto da faculdade e assim percebi que estudar antes sobre foi a 
        minha melhor escolha. Apesar de ser uma linguagem simples de codar, ela se torna complicada com relação a escalabilidade. O JS possui 
        estruturas que dependem dela, enquanto o Ruby possui apenas o framework Ruby on Rails. Lógico que não é desmerecendo ele, mas o JS tem uma
        versatilidade bem maior. Mas, o Ruby é bem mais seguro que o JS, ou melhor dizendo: no JavaScript o código fica exposto a qualquer usuário.
       <br />
        Aprendi que o Ruby as chamadas de métodos não precisam sererem feitas em um objeto específico, como no Java. Os métodos definidos 
        fora de qualquer classe são incluídos no nível mais alto do ambiente de execução. 
        Em tarefas intensivas em CPU, como processamento de gráficos ou imagens, Ruby será menos eficiente. Já o JS,
         especialmente em ambientes assíncronos, será uma escolha bem melhor. <br />
        Para finalizar, pretendo continuar a programar em Ruby e talvez criar um projeto com essa linguagem. Apesar de não ter grande apoio da 
        comunidade.
       </p>  </div>

       <div className={"background"}>
        <div className={"responsividade"}>
        <div className={"imgFlex"}></div>
    
</div>
<p id={"texto"}>Estudei sobre o FlexBox em janeiro de 2023. Via que meus projetos não ficavam com um formato tão legal
  quando ia para outra tela e então comecei a pesquisar sobre. Posso dizer que aprendi praticamente tudo sobre com o  <a id={"link"} href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">css tricks</a>. O Chris Coyier publicou esse artigo em 2013
  e sinceramente foi perfeito. Usei outras fontes de pesquisa para entender mais sobre, porém não me recordo.
  O conceito de Flexbox mudou o meu conceito sobre frontend, por que não é apenas jogar uma div , mas sim entender a estrutura do seu site. Comecei a me 
  preocupar com a organização dos minhas marcações no HTML, afinal , é bem melhor quando você encontra uma classe so de bater o olho do que ficar procurando 
  com outras 30 mil que nem estão sendo usadas. <br />
  Confesso que demorei muito para entender o conceito de : pai e filho. A teoria é fácil , mas na prática por muitas vezes eu não sabia como 
  implementar. A famosa pesquisa: como centralizar uma div? Fiz muitas vezes. Atualmente é bem mais fácil estruturar um site e algumas vezes eu 
  já sei o que digitar bem antes de iniciar. Tudo foi questão de prática. Muita prática. Por outro lado, Grid não é tão simples. Sua estrutura é bem diferente
  do FlexBox. Em casos onde várias células são necessárias o Grid é o mais indicado a ser usado.
  <br />
 Assim, aprendi que antes de programar você analisa o que irá precisar e decide qual o mais adequado para cada caso.
 <br />
 Neste portifólio utilizei conceitos de Flexbox e pretendo com o tempo deixar ele responsivo para tamanhos menores.
   </p>
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