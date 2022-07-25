import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index.js'
import Home from './components/Home/index.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
