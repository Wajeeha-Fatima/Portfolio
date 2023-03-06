import React from 'react'
import './header.css'
import CTA from './CTA'
import About from './about/About'

const Header = () => {
    return (
        <section id='header'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Wajeeha Fatima</h1>
                <h5 className="text-light">Software Developer</h5>
                <CTA />
                <About />
            </div>
        </section>
    )
}

export default Header
