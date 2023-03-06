import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG6 from '../../assets/portfolio1.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG1} alt='image 1'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Wajeeha-Fatima/Front-End' className='btn' target='_blank'>Github</a>
                        <a href='https://www.readersclub.pk/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG2} alt='image 2'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Wajeeha-Fatima/Quran-Majeed' className='btn' target='_blank'>Github</a>
                    </div>
                </article>

                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG6} alt='image 6'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio