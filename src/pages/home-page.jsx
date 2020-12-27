import React from 'react'
import Header from '../components/header.component'
import OurQualities from '../components/our-qualities'
import Pricing from '../components/pricing.component'
import Portfolio from '../components/portfolio.component'
import Contact from '../components/contact.component'

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <OurQualities/>
            <Pricing/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}
