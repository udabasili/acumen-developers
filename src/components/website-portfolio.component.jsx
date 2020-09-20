import React from 'react'
import { websitePortfolioData } from '../data/website-portfolio.data'
import Card from './card.component'

export default function WebsitePortfolio() {
    return (
        <div className="portfolio__card-list">
            {websitePortfolioData.map((data, index) => (
                <Card 
                    image={data.image} 
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
