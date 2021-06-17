import React from 'react'
import { GrInternetExplorer } from 'react-icons/gr';
import { BiMessageAltEdit } from 'react-icons/bi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { GoDeviceMobile } from 'react-icons/go';

const data =[
    {
        title:'Affordable hosting',
        icon:<GrInternetExplorer/>,
        description: 'Give the best possible hosting prices on the market but affordable domain names'
    },
    {
        title: 'Real time Editing',
        icon:<BiMessageAltEdit/>,
        description: 'You can make any modification you want when you want '
    },
    {
        title: 'Responsive help service',
        icon:<IoMdHelpCircleOutline/>,
        description: 'You can contact me and I would be ready to handle your issue as soon as possible '
    }, 
    {
        title: 'Multiplatform Mobile Development',
        icon:<GoDeviceMobile/>,
        description: 'Make your vision come true both on websites and mobile devices'
    },
]
export default function Pricing() {
    return (
        <section className='section-pricing'>
            <div className='u-margin-bottom-big u-center-text'>
                <h3 className='header-tertiary header-custom'>
                    What I bring 
                </h3>
            </div>
            <div className='pricing__list'>
                {data.map((item) =>(
                    <div className='pricing__item'>
                        <div className='pricing__icon'>
                            {item.icon}
                        </div>
                        <h3 className='header-tertiary pricing__title'>{item.title}</h3>
                        <p className='description'>{item.description}</p>
                    </div>
                ))}
            </div>            
        </section>
    )
}
