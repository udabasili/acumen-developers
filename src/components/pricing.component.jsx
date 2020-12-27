import React from 'react'
import PiggyBank from '../assets/images/piggy-bank-2889046_1920.jpg'

const data =[
    {
        title:'Affordable hosting',
        description: 'Give the best possible hosting prices on the market but affordable domain names'
    },
    {
        title: 'Real time Editing',
        description: 'You can make any modification you want when you want '
    },
    {
        title: 'Responsive help service',
        description: 'You can contact us and we would be ready to handle your issue as soon as possible '
    }, 
    {
        title: 'Web Development & Mobile Development',
        description: 'Make your vision come true both on websites and mobile devices'
    },
]
export default function Pricing() {
    return (
        <section className='section-pricing'>
            <div className='pricing__image' style={{backgroundImage: `url(${PiggyBank})`}} >

            </div>
            <div className='pricing__content'>
                <div className='pricing__title'>
                    <span>Bring your Vision to life</span>
                    <span>At an affordable price</span>
                </div>
                <div className='pricing__list'>
                    {data.map((item) =>(
                        <div className='pricing__item'>
                            <h3 className='header-tertiary'>{item.title}</h3>
                            <p className='description'>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            
        </section>
    )
}
