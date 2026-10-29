import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import SpaceshipDashboard from './pages/SpaceshipDashboard'

// Previous page imports — uncomment when needed
// import Main from './pages/index4'
// import Test from './pages/index'
// import Hero from './pages/index2'
// import Test2 from './pages/index3'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SpaceshipDashboard />} />

        {/* Previous routes — uncomment when needed for development
        <Route path='/old' element={<Main />} />
        <Route path='/test' element={<Hero />} />
        <Route path='/test1' element={<Test2 />} />
        <Route path='/test2' element={<Test />} />
        */}

      </Routes>
    </Router>
  )
}

export default App
