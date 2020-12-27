import React from 'react'

export default function Slide({
    image,
    title,

}) {
    return (
        <div className="slide ">
            <div type='progress' min={0} max={10} value={5} className='slide__progress' >
                </div>
            <div style={{backgroundImage: `url(${image})`}} className='slide__content fade'>
                <div className='slide__right'>
                    <p className='title' >{title}</p>
                    <a href='/contact' className='btn'>Contact Us</a>
                </div>
            </div>
            
            
        </div>
    )
}
