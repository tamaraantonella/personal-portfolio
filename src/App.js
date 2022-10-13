import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'



const App = () => {
    return (
    <div className='mx-auto max-w-[1200px]'>
            <Header/>
            <Nav />
            <About/>
            <Experience />
            <Projects />
            <Contact />
            <Footer />
    </div>
    )
}

export default App