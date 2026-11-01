import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Main from './pages/index4'

// Test page imports commented out to reduce bundle size
// These pull in Three.js, OGL, and other heavy libs not needed in production
// import Test from './pages/index'
// import Hero from './pages/index2'
// import Test2 from './pages/index3'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />

        {/* Test routes commented out — uncomment when needed for development
        <Route path='/test' element={<Hero />} />
        <Route path='/test1' element={<Test2 />} />
        <Route path='/test2' element={<Test />} />
        */}

      </Routes>
    </Router>
  )
}

export default App
