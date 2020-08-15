import React, { Component } from 'react'
import Card from '../components/card.component'
import { applicationData } from '../data/application-data.data'
import MainHeading from '../components/main-heading.component'

export default class PortfolioPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='portfolio-page'>
                <MainHeading title='works'/>
                <section className="portfolio">
                    {applicationData.map((data, index) => (
                        <Card 
                            image={data.image} 
                            description={data.description}
                            name={data.name} 
                            programs={data.programs} 
                            link={data.link}
                            gitHub={data.github}
                            key={index}/>
                    ))}
                </section>
            </div>
        )
    }
}
