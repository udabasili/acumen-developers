import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import MobilePortfolio from '../components/mobile-portfolio.component'
import WebsitePortfolio from '../components/website-portfolio.component'
import { NavLink, withRouter } from 'react-router-dom'

class PortfolioPage extends Component {
    constructor(props){
        super (props);
        this.state = {
            websiteName: props.match.params.websiteName || 'top+fashion',
            mobileName: props.match.params.mobileName || 'cyber+social'
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.mobileName)

    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params !== prevProps.match.params || 
            this.props.match.name !== prevProps.match.name) {
                this.handleRoute()


        }
    }

    handleRoute = () =>{
        console.log(this.props.match.params.websiteName === undefined)
        if (this.props.match.params.websiteName === undefined || 
            this.props.match.params.websiteName === 'undefined') {
            this.setState((prevState) => ({
                ...prevState,
                websiteName: 'top+fashion',
                mobileName: this.props.match.params.mobileName

            }))
            return;
        }
        if (this.props.match.params.mobileName === 'undefined' ||
            this.props.match.params.mobileName === undefined) {
            console.log(this.props.match.params.mobileName)
            this.setState((prevState) => ({
                ...prevState,
                mobileName: 'cyber+social',
                websiteName: this.props.match.params.websiteName

            }))
            return;
        }
    }

    render() {
        const title = this.props.title
        const {mobileName, websiteName} = this.state
        this.props.history.listen(() =>{
            console.log('here')
            this.handleRoute()

        })
        return (
            <div className='portfolio-page'>
                <MainHeading title='works'/>
                <nav className='portfolio__nav'>
                    <ul className='portfolio__list'>
                        <li className='portfolio__item'>
                            <NavLink to={`/portfolio/website/${websiteName}`} 
                                exact={false}
                                activeClassName='active' 
                                className='portfolio__link'>
                                Websites
                            </NavLink>
                        </li>
                        <li className='portfolio__item'>
                            < NavLink to={`/portfolio/mobile/${mobileName}`} 
                                activeClassName = 'active'
                                className = 'portfolio__link' >
                                    Mobile
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                <div className="portfolio">
                    {title === 'mobile' && 
                        <MobilePortfolio {...this.props}/>
                    }
                    {title === 'website' && 
                        <WebsitePortfolio {...this.props}/>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(PortfolioPage)