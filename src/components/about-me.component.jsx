import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import UserImage from '../assets/images/owner.jpeg'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
    return (
        <section className='section-about'>
            <div className='about'>
                <div className='about__image'>
                    <img src={UserImage} alt='me'/>
                </div>
                <div className='about__content'>
                    <h3 className='header-secondary'>
                        Who I am
                    </h3>
                    <p className='paragraph'>
                        <span> I am Udendu</span>, 
                        I would be responsible for bringing your vision to life to meet high web development standards at an affordable
                        rate. It is one thing to build a website but succeeding online is a different story.
                        You’ll need more than just a beautiful website to stand out these days
                    </p>
                    <ul className='contacts'>
                        <li className='contacts__item'>
                            <a target='Email'  href='mailto:udbasili@acumendevelopers.com' >
                                <FontAwesomeIcon className='icon' icon={faMailBulk} />
                            </a>
                        </li>
                        <li className='contacts__item'>
                            <a target='Github' href='https://github.com/udabasili'>
                                <FontAwesomeIcon className='icon' icon={faGithubSquare} />
                            </a>
                        </li>
                        <li className='contacts__item'>
                            <a target='Facebook' href='https://www.facebook.com/acumendev'>
                                <FontAwesomeIcon className='icon' icon={faFacebook} />
                            </a>
                        </li>
                    </ul>  
                </div>
            </div>
        </section>
    )
}
