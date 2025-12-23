import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleBlog from './pages/SingleBlog'
import SingleService from './pages/SingleService'
import ScrollTop from './ScrollTop'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:name" element={<SingleBlog/>} />
          <Route path="/service/:name" element={<SingleService/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <ScrollTop />
      </BrowserRouter>


    </>
  )
}

export default App
