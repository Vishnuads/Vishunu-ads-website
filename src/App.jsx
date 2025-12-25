import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleBlog from './pages/SingleBlog'
import SingleService from './pages/SingleService'
import Projects from './pages/Projects'
import ScrollToHash from './pages/ScrollToHash'
import Aiad from './pages/Aiad'

function App() {
  return (
    <>
      <BrowserRouter> 
      <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:name" element={<SingleBlog/>} />
          <Route path="/service/:name" element={<SingleService/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aiad-film" element={<Aiad/> } />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
