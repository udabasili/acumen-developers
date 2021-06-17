import React from 'react';
import { websitePortfolioData } from '../data/website-portfolio.data';


export default function Preview() {

    return (
        <section className='section-preview'>
            <div className='u-margin-bottom-big'>
                <h3 className='header-tertiary header-custom'>
                    Some Work Samples 
                </h3>
            </div>
            <div className='preview'>
                <div className='preview__list'>
                    {websitePortfolioData.filter((item, index) => ( index < 3)).map((item) => {
                        return (
                            <div className='preview__item'>
                                <div className='preview__image'  style={{backgroundImage: `url(${item.image})`}}/>
                                    <div className='preview__details' >
                                    <h5 className='preview__title'>
                                        {item.name}
                                        <span className='preview__icon'>
                                            <img src={item.logo} alt={item.name} />
                                        </span>
                                    </h5>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='preview__link' key={item.index}
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
