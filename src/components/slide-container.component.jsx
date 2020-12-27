import React, { useEffect, useRef } from 'react'
import Image from '../assets/images/slide-image1.jpg';
import Image1 from '../assets/images/slide-image-2.jpg';
import Image2 from '../assets/images/slide-image-3.jpg';
import Slide from './slide.component';

const slideComponent = [
    {
        image: Image,
        title:'create engaging Websites',

    },
    {
        image: Image1,
        title:'Empowering people and business',
       
    },
    {
        image: Image2,
        title:'Website building done right',

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
        // for(let index = 0 ; index < slideContainer.length; index ++){
        //     slideContainer[index].style.display = 'block'
        // }   
        
    }
    useEffect(() => {
        const startInterval = setInterval(slideChanger, 10000)
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
