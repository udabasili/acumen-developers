import React from 'react'
import { mobileData } from '../data/mobile-portfolio.data'
import Card from './card.component'


export default function MobilePortfolio() {
    return (
        <div className="portfolio__card-list">
            {mobileData.map((data, index) => (
                <Card 
                    image={data.image} 
                    mobile='mobile'
                    description={data.description}
                    name={data.name} 
                    programs={data.programs} 
                    link={data.link}
                    gitHub={data.github}
                    key={index}/>
            ))}
        </div>
    )
}
