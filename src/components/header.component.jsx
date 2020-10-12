import React from 'react'
import { Slide } from 'react-slideshow-image';
import ReactTypingEffect from "react-typing-effect";
import 'react-slideshow-image/dist/styles.css'
import Image2 from '../assets/images/Image.png';

const slideImages = [
  Image2,
  Image2,
  Image2
];

export default function Header() {
    return (
      <header className="header">
        <div className="slide-container">
          <Slide duration={3000} >
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})`, backgroundColor:'#ffd664' }}></div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})`, backgroundColor: '#ffb900' }}></div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})`, backgroundColor: '#99740d' }}></div>
            </div>
          </Slide>
        </div>
        <div className="header__right">
          <h1 className='header-primary'>
             We bring you {" "}
              <ReactTypingEffect
            className="typing-style"
            speed={100}
            eraseDelay={100}
            typingDelay={2000}
            text={["excellence.", "quality", "security"]}
          />
          </h1>
         
        </div>
      </header>
    );
}
