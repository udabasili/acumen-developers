import React from 'react'
import {
    Slide
} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image2 from '../assets/images/Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioDetail({match, mobile, portfolioData}) {
    let name ;
    console.log(match.params)
    if(!mobile){
        name = match.params.websiteName.split("+").join(" ")

    }
    else{
        name = match.params.mobileName.split("+").join(" ")

    }
    const data = portfolioData.filter((item) => item.name.toLowerCase() === name )[0]
    const slideImages = [
        Image2,
        Image2,
        Image2
    ];
    const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: true,
            infinite: true,
            easing: "ease",
    };
    return (
            data !== undefined && (
                <div className={`portfolio-detail ${mobile}`}>

            <div className='portfolio-detail__slide'>
                <Slide {...properties} >
                    <div className="each-slide">
                        <div style={{ 
                            backgroundImage: data.images === undefined ?
                                `url(${slideImages[0]})` :
                                `url(${data.images.default[0]})`
                                , 
                             
                            }}></div>
                        </div>
                        <div className="each-slide">
                        <div style={{ backgroundImage: data.images === undefined ?
                                `url(${slideImages[0]})` :
                                `url(${data.images.default[1]})` }}></div>
                        </div>
                        <div className="each-slide">
                        <div style={{ backgroundImage: data.images === undefined ?
                                `url(${slideImages[0]})` :
                                `url(${data.images.default[2]})`
                                 }}></div>
                        </div>
                </Slide>
                {!mobile && <h3 className='header-tertiary'>{data.name}</h3>}
                    
            </div>
        
            < div className = 'portfolio-detail__information' >
                                {mobile && <h3 className='header-tertiary'>{data.name}</h3>}

                <div className='program__list'>
                    { data.programs.split(',').map((program, index) =>(
                        <div className='program__item' key={index}>
                            <FontAwesomeIcon icon={faCode}/>
                            {program}
                        </div>
                    ))}
                </div>
            <p className='paragraph'>
                {data.description}
            </p>
            
                <div className="button-container">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      Open
                    </a>
                    {!mobile &&
                      <a
                      href={data.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      gitHub
                    </a>}
                    
                  </div>
                    
                
            </div>
            </div>
            )

            
            
    )
}
