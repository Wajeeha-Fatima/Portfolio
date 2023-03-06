import React from 'react'
import { toast } from "react-hot-toast";
import './contact.css'
import { MdMailOutline } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbjl6q9', 'template_95jig1u', form.current, 'ql3nJM_VVIbTDbVJl')
            .then((result) => {
                toast.success("Message Sent");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                toast.fail("Somethings wrong");
            });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>wajeehafatima669@gmail.com</h5>
                        <a href='mailto:wajeehafatima669@gmail.com' target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+923047783808</h5>
                        <a href='https://api.whatsapp.com/send?phone=+233557233888' target='_blank'>Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
