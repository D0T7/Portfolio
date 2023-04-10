import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

const App = () => {
    return (
        <>
            
            <Header />
            {/* <Nav /> */}
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />

        </>
    )
}

export default App