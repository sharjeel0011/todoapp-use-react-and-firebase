import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../../screen/home/Home'
import Profile from '../../screen/profile/Profile'
import Navbar from '../../component/Navbar/Navbar'
const Router = () => {
  return (
 <>
 
 <BrowserRouter>
    <Navbar/>
 <Routes>
 
    <Route path='/' element={<Home/>} />
    <Route path='profile' element={<Profile/>} />
 </Routes>
 </BrowserRouter>
 
 </>
  )
}

export default Router