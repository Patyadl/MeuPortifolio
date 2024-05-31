import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Project from './components/Projects/projects'
import Estudos from './components/Estudos/estudos'
import Dicas from './components/Dicas/dicas'
import Livros from './components/Livros/livros'
import Sobre from './components/SobreMim/sobre'

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Project/>} />
      <Route path="/estudos" element={<Estudos/>} />
      <Route path="/dicas" element={<Dicas/>} />
      <Route path="/livros" element={<Livros/>} />
      <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </Router>
  )
}

export default Main
