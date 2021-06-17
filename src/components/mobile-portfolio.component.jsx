import React from 'react'
import { mobileData } from '../data/mobile-portfolio.data'


export default function MobilePortfolio(props) {

    return (
            <section className='section-mobile' >
                <div className='mobile'>
                    <div className='mobile__list'>
                    {mobileData.filter((item, index) => ( index < 3)).map((item) => {
                        return (
                            <div className='mobile__item'>
                                <div className='mobile__image'  style={{backgroundImage: `url(${item.image})`}}/>
                                    <div className='mobile__details' >
                                    <h5 className='mobile__title'>
                                        {item.name}
                                        <span className='mobile__icon'>
                                            <img src={item.logo} alt={item.name} />
                                        </span>
                                    </h5>
                                    <p className='mobile__description'>{item.description}</p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='mobile__link' key={item.index}
                                    >
                                    Link
                                </a>
                                </div>
                        </div>             
                        )
                    })}
                </div>
            </div>
        </section>
        )
    
}
