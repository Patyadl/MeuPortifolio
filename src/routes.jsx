import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Project from './components/Projects/projects'
import Livros from './components/Livros/livros'
import MinhaJornada from './components/MinhaJornada/MinhaJornada'
import Cargo from './components/Cargo/Cargo'
import Contatos from './pages/contatosPage'


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Project/>} />
         <Route path="/livros" element={<Livros/>} />
   <Route path="/jornada" element={<MinhaJornada/>}/>
   <Route path="/cargo" element={<Cargo/>}/>
   <Route path="/contatos" element={<Contatos/>}/>
      </Routes>
    </Router>
  )
}

export default Main
