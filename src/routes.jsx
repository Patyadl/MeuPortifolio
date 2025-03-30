import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Project from './components/Projects/projects'
import Livros from './components/Livros/livros'
import MinhaJornada from './components/MinhaJornada/MinhaJornada'


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Project/>} />
         <Route path="/livros" element={<Livros/>} />
   <Route path="/jornada" element={<MinhaJornada/>}/>
      </Routes>
    </Router>
  )
}

export default Main
