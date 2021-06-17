import React from 'react'

export default function Slide({
    image,
    title,
    subTitle

}) {
    return (
        <div className="slide ">
            <div className='slide__content fade'>
                <div className='slide__image' >
                    <span style={{backgroundImage: `url(${image})`}} ></span>
                </div>
                <div className='slide__background'/>
                <h1 className='slide__text u-margin-bottom-medium' >
                    <span className='title title__main'>{title}</span>
                    <span className='title title__sub'>{subTitle}</span>
                </h1>
                <a href='/contact' className='btn--slide u-margin-bottom-medium'>Contact Me</a>
            </div>
            
            
        </div>
    )
}
