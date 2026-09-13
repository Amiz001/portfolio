import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioDashboard from './pages/PortfolioDashboard'
import Main from './pages/index4'
import Hero from './pages/index2'
import Test2 from './pages/index3'
import Test from './pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PortfolioDashboard />} />
        <Route path='/classic' element={<Main />} />
        <Route path='/test' element={<Hero />} />
        <Route path='/test1' element={<Test2 />} />
        <Route path='/test2' element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App

