import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faShieldAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default function AboutUs() {
    return (
        <section className='about-section'>
            <h2 className="header-secondary">
                What We bring you
            </h2>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="section-box">
                        <FontAwesomeIcon icon={faFileCode} className="section-box__icon "/>
                        <h3 className="header-tertiary">Full Stack Developer</h3>
                        <p className="section-box__text">
                            Combining backend  with website UI, making it as seamless, fast, safe and real time as possible.
                    </p>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="section-box">
                        <FontAwesomeIcon icon={faShieldAlt} className="section-box__icon " />
                        <h3 className="header-tertiary">Website Security</h3>
                        <p className="section-box__text">
                            Making sure  users are protected from Denial-Of-Service (DOS) Attacks,
                            Cross-Site Scripting (XSS) Attacks, Brute Force Attacks and SQL/NoSQL Injection Attacks,
                            giving them peace of mind.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="section-box">
                        <FontAwesomeIcon icon={faMobileAlt} className="section-box__icon " />
                        <h3 className="header-tertiary">Mobile Friendly</h3>
                        <p className="section-box__text">
                            Responsive design throughout all possible devices
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
