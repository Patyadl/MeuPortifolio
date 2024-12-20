import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Project from './components/Projects/projects'
import Estudos from './components/Estudos/estudos'
import Livros from './components/Livros/livros'

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Project/>} />
      <Route path="/estudos" element={<Estudos/>} />
      <Route path="/livros" element={<Livros/>} />

      </Routes>
    </Router>
  )
}

export default Main
