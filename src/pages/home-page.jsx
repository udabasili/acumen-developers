import React from 'react'
import Header from '../components/header.component'
import Pricing from '../components/pricing.component'
// import Preview from '../components/preview.component'
import AboutMe from '../components/about-me.component'
import Technologies from '../components/technologies.component'

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <Pricing/>
            <AboutMe/>
            {/* <Preview/> */}
            <Technologies/>
        </div>
    )
}
