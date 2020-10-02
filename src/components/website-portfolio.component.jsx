import React from 'react'
import { websitePortfolioData } from '../data/website-portfolio.data'
import PortfolioDetail from './portfolio-detail.component'
import PortfolioList from './portfolio-list.component'

export default function WebsitePortfolio(props) {
    return (
        <React.Fragment>
            <PortfolioList portfolioData={websitePortfolioData} {...props}/>
            <PortfolioDetail portfolioData={websitePortfolioData} {...props}/>
            
        </React.Fragment>
    )
}
