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
        
    }, [src, placeholder])
        return (
            image ?
                <div className='image' {...props} style={{ backgroundImage: `url(${image || placeholder})` }} /> :
                <div class="image-loader">
                    <span class="image-loader__point image-loader__point-1"></span>
                    <span class="image-loader__point image-loader__point-2"></span>
                    <span class="image-loader__point image-loader__point-3"></span>
                    <span class="image-loader__point image-loader__point-4"></span>
                    <span class="image-loader__point image-loader__point-5"></span>
                    <span class="image-loader__point image-loader__point-6"></span>
                    <span class="image-loader__point image-loader__point-7"></span>
                    <span class="image-loader__point image-loader__point-8"></span>
                </div>


        )
}
