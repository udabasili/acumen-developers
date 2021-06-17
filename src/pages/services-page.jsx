import React, { Component } from 'react'
import Card from '../components/card.component';
import MainHeading from '../components/main-heading.component';
import Computer from '../assets/images/computer-search-icon.png';
import Mobile from '../assets/images/mobile-icon.png';
import Shop from '../assets/images/basket-icon.png';

export default class ServicePage extends Component {
   
    render() {
        
        return (
            <div className='service-page'>
                <MainHeading title='services'/>
                <div className='services'>
                    <Card image={Computer} 
                        name='Web Development'
                         details = {
                             `I make use of the MERN (Mongodb Express React Node) Stack to make responsive, fast and affordable websites for your
                             business and personal use. Our websites are amongst one of the best out there and our main 
                             goal is to bring your vision to life, matching your budget without compromising quality or scalability
                             `
                         }
                        />
                    <Card 
                        image={Mobile} 
                        name='Mobile Development'
                        details = {`I would provide you with a great  app development services 
                         to build next-gen mobile applications using  React Native. With about 5 billion mobile users in the world current, I know  
                         the importance of tapping into the mobile market and making sure app competes with the best ones available in the app stores`}/>
                    <Card image={Shop} 
                         details = {`With demand for E-Commerce websites on the rise,  i understand the need for
                         creating quality and engaging online stores that would properly showcase what your business is all about and keep your
                         customers engaged with quality UI , great responsive design and an overall quality user experience  `}
                        name='E-commerce'/>
                </div>
                
            </div>
        )
    }
}
