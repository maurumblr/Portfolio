import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />      
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
