import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import '../src/styles/style.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
  )
}

export default App