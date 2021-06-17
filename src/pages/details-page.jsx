import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, createRef } from "react"; 
import MainHeading from "../components/main-heading.component";


class DetailsPage extends Component {
  container = createRef(null)

  componentDidMount() {
      this.container.current.scrollIntoView()
  }
  render() {

    const {name, description, programs, link, github, images} = this.props.history.location.state
    const slideImages = [
        ...images
        ];
    return (
     <div className='details-page' ref={this.container} >
        <MainHeading title={name}/>
         <div className="button-container">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="button">
                Open
            </a>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
            >
                gitHub
            </a> 
        </div>
        <div className='program__list'>
            { programs.split(',').map((program, index) =>(
                <div className='program__item' key={index}>
                    <FontAwesomeIcon icon={faCode}/>
                    {program}
                </div>
            ))}
                </div>
        <section className='section-details'>
            <div className='detail'>
                <div className='detail__description'>
                    <h3 className='header-tertiary u-margin-bottom-small '>Description</h3>
                    <p className='paragraph detail__description'>
                        {description}
                    </p>
                </div>
                 <div className="images">
                    {slideImages.map((image, index) => (
                        <div className="each-slide" key={index}>
                            <img className='image' src={image} alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>
              
            </div>

            <div className='detail__grid detail__grid---right'>

            </div>
            
            
            <div className='detail__programs'>
                
            </div>
        </section>
     </div>
    );
  }
}

export default DetailsPage;