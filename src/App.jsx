import React from 'react'
import Home from './components/home/Home'
import {Route, Routes} from "react-router-dom"
import Course from './components/course/Course'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import { Navigate } from 'react-router-dom'


const App = () => {
  const [authuser, setauthuser] = useAuth();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authuser?<Course/>:<Navigate to={"/signup"}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App