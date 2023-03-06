import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>6+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Highly skilled Software Engineer with expertise in developing innovative solutions for complex technical challenges. Proven track record of delivering high-quality software on time and on budget. Passionate about driving technology advancements and continuously improving software development processes. Dedicated to delivering exceptional user experiences through robust and efficient code.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About