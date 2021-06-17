import React from 'react'

export default function Card({
        image, 
        name, 
        link,
        details,
        mobile=null,
        gitHub,
        programs}) {
            return (
              <div className={`card ${mobile}`}>
                <div className="card__front card__side">
                  <div
                    className="card__picture"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  >
                    &nbsp;
                  </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span">{name}</span>
                  </h4>
                  <div className='card__description'>
                    <p className='paragraph'>
                    {details}
                  </p>
                  </div>
                  
              
                </div>
              </div>
            );
}
