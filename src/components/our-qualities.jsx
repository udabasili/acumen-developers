import React from 'react'
import ComponentTitle from './component-title.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faShieldAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default function OurQualities() {
    return (
        <section className='section-qualities'>
            <div className='qualities__header'>
                <ComponentTitle title='Qualities' />
                
            </div>
            <div className="qualities">
                <div className="qualities-box">
                    <FontAwesomeIcon icon={faFileCode} className="qualities-box__icon " />
                    <h3 className="header-tertiary">Full Stack Developer</h3>
                    <p className="qualities-box__text">
                        Combining backend  with website UI, making it as seamless, fast, safe and real time as possible.
                    </p>
                </div>

                <div className="qualities-box">
                    <FontAwesomeIcon icon={faShieldAlt} className="qualities-box__icon " />
                    <h3 className="header-tertiary">Website Security</h3>
                    <p className="qualities-box__text">
                        Making sure  users are protected from Denial-Of-Service (DOS) Attacks,
                        Cross-Site Scripting (XSS) Attacks, Brute Force Attacks and SQL/NoSQL Injection Attacks,
                        giving them peace of mind.
                        </p>
                </div>
                <div className="qualities-box">
                    <FontAwesomeIcon icon={faMobileAlt} className="qualities-box__icon " />
                    <h3 className="header-tertiary">Mobile Friendly</h3>
                    <p className="qualities-box__text">
                        Responsive design throughout all possible devices
                    </p>
                </div>
            </div>
        </section>

    )
}
