import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import LazyLoading from './lazy-loading.component';

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
    return (
            data !== undefined && (
                <div className={`portfolio-detail ${mobile}`}>

            <div className='portfolio-detail__slide'>
                    <LazyLoading src={data.image} />
                {/* <div className=' portfolio-slide-image' style={{ backgroundImage: `url(${data.image})` }} />  */}
                {!mobile && <h3 className='header-tertiary'>{data.name}</h3>}
                    
            </div>
        
                < div className={`portfolio-detail__information ${mobile}`} >
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
                      href={data.github}
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
