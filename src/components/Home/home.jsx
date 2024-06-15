import React from "react";
import "../Home/home.css"
import Nav from "../NavBar/nav.jsx";
const Home = () =>{ return (
    <div>
       
      <Nav/>
       <section className={"borda"}>
       <div id="semicirculo"> <h1>Patrícia <br /> Lucena</h1> 
       </div>
</section>

<section className={"imgMenina-content"}>
<div id="imgMenina"></div>
</section>

<section className={"icones-container"}>
<section className={"icones"}> 
<section className={"icone"}>
     <div className={"imgCyber"}></div>
</section>

<section className={"icones1-content"}>
<div className={"imgJava"}></div>
    <div className={"imgSpring"}></div>
    <div className={"imgFlex"}></div>
    <div className={"imgJS"}></div>
</section>

<section className={"icones2-content"}>
<div className={"imgRuby"}></div>
    <div className={"imgAgile"}></div>
    <div className={"imgSql"}></div>
    <div className={"imgReact"}></div>
</section>
</section>
</section>
    </div>
)}

export default Home
