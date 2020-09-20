import React from 'react'

export default function Card({
        image, 
        name, 
        link,
        description,
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
                  <div class="card__details">
                    <ul>
                      {programs.split(",").map((program) => (
                        <li>{program}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card__back card__side">
                  <div class="card__description">
                    <p className="card__description">{description}</p>
                  </div>
                  <div className="button-container">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      Open
                    </a>
                    {!mobile &&
                      <a
                      href={gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      gitHub
                    </a>
                    }
                    
                  </div>
                </div>
              </div>
            );
}
