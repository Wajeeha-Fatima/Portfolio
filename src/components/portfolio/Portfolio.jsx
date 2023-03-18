import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG1} alt='image 1'></img>
                    </div>
                    <h3>Ecommerce Website in React</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Wajeeha-Fatima/Front-End' className='btn' target='_blank'>Github</a>
                        <a href='https://www.readersclub.pk/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG2} alt='image 2'></img>
                    </div>
                    <h3>Quran Application</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Wajeeha-Fatima/Quran-Majeed' className='btn' target='_blank'>Github</a>
                    </div>
                </article>

                <article className='portfolio__items'>
                    <div className='portfolio__items-image'>
                        <img src={IMG3} alt='image 3'></img>
                    </div>
                    <h3>Shopping Cart in JS</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Wajeeha-Fatima/Shopping-Cart-JS' className='btn' target='_blank'>Github</a>
                        {/* <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
            </div>
            </section>
            </div>
    )
}

export default Portfolio