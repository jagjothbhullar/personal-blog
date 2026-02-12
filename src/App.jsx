import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import About from './pages/About'
import Projects from './pages/Projects'
import RajSportsPitch from './pages/RajSportsPitch'

function App() {
  return (
    <BrowserRouter basename="/personal-blog">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/raj-sports-pitch" element={<RajSportsPitch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
