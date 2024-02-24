import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import UserProfile from './pages/userprofile'

import Contact from './pages/contact'
import AvailableBoatsPage from './pages/available'
import SpecialPackagesPage from './pages/packages'
import Feedback from './pages/feedback'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/reg' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/user' element={<UserProfile/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/available' element={<AvailableBoatsPage/>}></Route>
        <Route path='/packages' element={<SpecialPackagesPage/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App