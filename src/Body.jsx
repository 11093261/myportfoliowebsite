import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import { Outlet } from 'react-router-dom'
import Project from './Components/Project'
import Contact from './Components/Contact'

const Body = () => {
  return (
    
    <main>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
    </main>
  )
}

export default Body
