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
                            I am a creative web developer that has more than a year of experience dedicated to building and optimizing the performance of user-centric, high-impact websites. I created this business because I noticed that there is a scarcity of great websites that can be built for clients to match their budgets especially those with low income. 

                            My websites are very creative and provide a great user interaction experience.
                            I deal with building static websites,  dynamic websites, and mobile applications, making use of the MERN(MongoDB, Express, React, Node) stack, Firebase, MySQL, and React Native. 

                            I also find it very important to maintain security in applications I build and stay up-to-date with new methods and technology available for mobile and web building. Outside my work, I am a lover of good music, old school cinema (Thrillers, Crime, and Action mainly), hiking, salsa dancing, and kickboxing
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
