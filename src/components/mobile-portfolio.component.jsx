import React from 'react'
import { mobileData } from '../data/mobile-portfolio.data'
import PortfolioDetail from './portfolio-detail.component'
import PortfolioList from './portfolio-list.component'


export default function MobilePortfolio(props) {

    return (
            <React.Fragment>
                <PortfolioList portfolioData={mobileData} mobile='mobile' {...props}/>
                <PortfolioDetail portfolioData={mobileData}  mobile='mobile' {...props}/>
                
            </React.Fragment>
        )
    
}
