import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <section className="contact">
            <a href='/contact' className='btn'>
                Contact Us
            </a> 
            <ul className='contact__list'>
                <li className='contact__item'>
                    <FontAwesomeIcon className='icon' icon={faMailBulk} />
                    <div className='contact__detail'>
                        <span className='title'>Email</span>
                        <span className='desc'>udbasili@acumendevelopers.com</span>
                    </div>
                </li>
                <li className='contact__item'>
                    <FontAwesomeIcon className='icon' icon={faGithubSquare} />
                    <div className='contact__detail'>
                        <span className='title'>Github</span>
                        <span className='desc'>https://github.com/udabasili</span>
                    </div>
                </li>
                <li className='contact__item'>
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                    <div className='contact__detail'>
                        <span className='title'>Facebook</span>
                        <span className='desc'>https://www.facebook.com/acumendev</span>
                    </div>
                </li>
            </ul>  
            
        </section>
    )
}
