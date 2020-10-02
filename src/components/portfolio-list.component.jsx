import React from 'react'
import {NavLink} from 'react-router-dom'
export default function PortfolioList({portfolioData, ...otherProps}) {
    const title = otherProps.title
    return (
        <div className='portfolio-list'>
            {portfolioData.map((item, index) =>(
                <NavLink to={`/portfolio/${title}/${item.name.toLowerCase().replace(' ', '+')}`} 
                    key={index} className='portfolio-list__item' activeClassName='selected'>
                    <div className='portfolio-list__icon'>
                        <img src={item.logo} className='portfolio-list__logo'/>
                    </div>
                    <div className='portfolio-list__title'>
                        {item.name}
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
