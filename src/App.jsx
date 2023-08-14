import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import '../src/styles/style.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Index from './pages/admin/Index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/admin' element={<Index />}></Route>
    </Routes>
  )
}

export default App