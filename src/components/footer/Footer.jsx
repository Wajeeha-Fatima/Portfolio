import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <footer>
                <a href='#' className='footer__logo'>WAJEEHA FATIMA</a>
                <ul className='permalinks'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className='footer__socials'>
                    <a href='https://www.facebook.com/wajeeha.fatima.16718/'><FaFacebookF /></a>
                    <a href='https://www.linkedin.com/in/wajeeha-fatima-450102212/' target='_blank'><BsLinkedin /></a>
                    <a href='https://github.com/Wajeeha-Fatima' target='_blank'><FaGithub /></a>
                </div>

                <div className='footer__copyright'>
                    <small>&copy; Wajeeha Fatima. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
