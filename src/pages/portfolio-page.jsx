import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import MobilePortfolio from '../components/mobile-portfolio.component'
import WebsitePortfolio from '../components/website-portfolio.component'
import { NavLink } from 'react-router-dom'

export default class PortfolioPage extends Component {
    static propTypes = {

    }

    render() {
        console.log(this.props.title)
        const title = this.props.title
        return (
            <div className='portfolio-page'>
                <MainHeading title='works'/>
                <nav className='portfolio__nav'>
                    <ul className='portfolio__list'>
                        <li className='portfolio__item'>
                            <NavLink to='/portfolio/website' activeClassName='active' className='portfolio__link'>
                                Websites
                            </NavLink>
                        </li>
                        <li className='portfolio__item'>
                            < NavLink to = '/portfolio/mobile'
                                activeClassName = 'active'
                                className = 'portfolio__link' >
                                    Mobile
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                <section className="portfolio">
                    {title === 'mobile' && 
                        <MobilePortfolio/>
                    }
                    {title === 'website' && 
                        <WebsitePortfolio/>
                    }
                </section>
            </div>
        )
    }
}
