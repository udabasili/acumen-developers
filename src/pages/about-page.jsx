import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import UserImage from '../assets/images/owner.jpeg'
export default class About extends Component {
    render() {
        return (
            <div className='about-page'>
                <MainHeading title="About" />
                <h2 className="header-secondary u-margin-top-big ">
                    Hello, I'm Udendu! The owner of acumen developers
                </h2>
                <div className='about'>
                    <figure className='user__image-container'>
                        <img src={UserImage} className='user__image' alt='user' />
                        <figcaption className='user__username'>
                            Me
                        </figcaption>
                    </figure>
                    <div className='user__info'>
                        <h3 className='header-tertiary u-margin-bottom-small'>Passion, dedication, and a lot of coffee.</h3>
                        <p className='paragraph'>
                             I created this service because I have a great passion 
                             for creating and build websites at affordable prices that would 
                             communicate a feeling of joy and comfort, and provide a great user experience .
                             This involves building static websites,  dynamic websites  and  mobile applications,
                              making use of the MERN(MongoDB, Express, React, Node) stack, Firebase, MySQL and React Native . 
                            I also find it very really important to maintain security in applications i build 
                              and stay up-to-date with new methods and technology available for mobile and web building.
                              Outside my work, I am a lover of good music, old school cinema (Thrillers, Crime and Action mainly) , 
                              hiking, salsa dancing and kick boxing
                        </p>
                        
                        <p className='paragraph email'> 
                            <span style={{fontWeight: 'bolder'}}>Email: </span>
                            <span>udbasili@acumendevelopers.com</span>
                        </p>
                        <a 
                            className='paragraph email'
                            target='resume'
                            href='https://drive.google.com/file/d/1GwT9hmgg7_mMKnlHQWOM4B7MMYCPC0wL/view?usp=sharing'>
                            Resume
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
