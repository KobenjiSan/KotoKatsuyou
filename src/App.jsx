import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/AboutPage'

/**
 * Main application wrapper that handles routing between the Home and About pages.
 * Uses React Router to define client-side navigation structure.
 */
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
