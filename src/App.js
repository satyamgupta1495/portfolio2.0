import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index.js'
import Home from './components/Home/index.js'
import About from './components/About/index.js'
import Contact from './components/Contact/index.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
