import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experiencie from './components/experience/Experiencie'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'



const App = () => {
    return (
    <>
            <Header/>
            <Nav />
            <About/>
            <Experiencie />
            <Projects />
            <Contact />
            <Footer />
    </>
    )
}

export default App