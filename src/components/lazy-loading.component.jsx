import React, { useEffect, useState } from 'react'

export default function LazyLoading({src , placeholder, ...props}) {

    const [image, setImage] = useState(null)

    useEffect(() => {
        setImage(null)
        const imageLoading = new Image();
        imageLoading.src = src 
        imageLoading.onload =(e) =>{
            setImage(src)
        }
        
    }, [src])
        return (
            image ?
                <div className=' portfolio-slide-image' {...props} style={{ backgroundImage: `url(${src})` }} /> :

                <div style={{ backgroundImage: `url(${src})` }} className="image-loader" />
                
        )
}
