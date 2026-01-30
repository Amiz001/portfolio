import { useState } from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Test from './pages/index'
import Hero from './pages/index2'
import Test2 from './pages/index3'
import Test3 from './pages/index4'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Test3 />} />
        <Route path='/test' element={<Hero />} />
        <Route path='/test1' element={<Test2 />} />
        <Route path='/test2' element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
