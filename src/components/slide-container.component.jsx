import React, { useEffect, useRef } from 'react'
import Image from '../assets/images/slides/slide1.jpg';
import Image1 from '../assets/images/slides/slide2.jpg';
import Image2 from '../assets/images/slides/slide3.jpg';
import Slide from './slide.component';

const slideComponent = [
    {
        image: Image,
        miniTitle: 'We',
        title:'Build Websites',
        subTitle: 'of high quality'


    },
    {
        image: Image1,
        miniTitle: 'We',
        title:'Empower Businesses',
        subTitle: 'to be successful'
       
    },
    {
        image: Image2,
        miniTitle: 'We',
        title:'Match your Budget',
        subTitle: 'without sacrificing quality'

    }
]

export default function SlideContainer() {

    const ref = useRef(1)
    const slideChanger = () =>{
        let nextIndex = ref.current  + 1
        const slideContainer = document.querySelectorAll('.slide')
        slideContainer.forEach((slide, index) =>{
            index === ref.current ?
            slide.style.display = 'flex' :
            slide.style.display = 'none'


        })
        if (ref.current === 2) {
            ref.current = 0
        }else{
            ref.current = nextIndex
        }
        
    }
    useEffect(() => {
        const startInterval = setInterval(slideChanger, 4000)
        return () => {
            clearInterval(startInterval)
        }
    }, [])
    return (
        <div className="slide-container">
            {slideComponent.map((item, index) =>(
                <Slide key={index} {...item}/>
            ))}
        </div>
    )
}
