import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import { Link, withRouter } from 'react-router-dom'
import { websitePortfolioData } from '../data/website-portfolio.data'

const images = [
    "https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png",
    'https://user-images.githubusercontent.com/33573587/107160335-fce1b680-696b-11eb-9114-744c6cca6f0f.png',
    'https://user-images.githubusercontent.com/33573587/106401457-93f1c000-63fa-11eb-940c-ec5d316d8348.png',
    "https://user-images.githubusercontent.com/33573587/113302681-b4dd7100-92d6-11eb-8eef-d611b994cbd6.png",
]
class PortfolioPage extends Component {

    state= {
        imagesLoaded: true
    }

    preloader = async (imageArray) => {
        const promises = await imageArray.map((src) =>{
            return new Promise(function(res, rej){
                const img = new Image();
                img.src = src;
                img.onload = res();
                img.onerror = rej()
            })
        })

        await Promise.all(promises)
        this.setState({
            imagesLoaded: true

        

        })
    



} 


    componentDidMount() {
        this.preloader(images)
        images.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });
        this.setState({

        })
    }

    render() {
        const {imagesLoaded} = this.state
        console.log(websitePortfolioData)
        return (
            <div className='portfolio-page'>
                <MainHeading title='works'/>
                <section className='portfolios'>
                    {
                        imagesLoaded ? 
                        websitePortfolioData.map((item, index) =>(
                        <div className='portfolio'>
                            <div className='portfolio__image'>
                                <img className='portfolio__image' src={images[index]} alt={item.name}/>
                            </div>
                            <h3 className='header-tertiary'>{item.name}</h3>
                            <h3 className='header-tertiary categories'>{item.category}</h3>
                            <Link 
                                className='portfolio__link' 
                                to={{
                                    pathname: `/portfolio/${item.name.toLowerCase().replace(' ', '+')}`,
                                    state:{...item}
                                    
                                }}>View &#8594;</Link>
                            </div> 
                        )) :
                        <div>
                            lOADING
                        </div>
                    }


                </section>
                
            </div>
        )
    }
}

export default withRouter(PortfolioPage)