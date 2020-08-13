import React from 'react'
import Loader from '../components/loader.component'
import Header from '../components/header.component'
import AboutUs from '../components/about-us.component'

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <AboutUs/>
        </div>
    )
}
