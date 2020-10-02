import React from 'react'
import {  NavLink} from 'react-router-dom'
import Logo from '../assets/images/Acumen-Logo.png'
export default function Navigation() {

    React.useEffect(() => {
      const navLinks = document.querySelectorAll(".navigation__list");
      const checkbox = document.querySelector(".navigation__checkbox");
      Array.from(navLinks).map((navLink) =>
        navLink.addEventListener("click", function () {
          checkbox.checked = false;
        })
      );
      return () => {
      };
    }, []);

    return (
        <nav className='navigation'>
            <div className="logo-box">
                <span><img src={Logo} className='logo' alt='web-logo'/></span>
                <span>Acumen Developers</span>
            </div>
            <input type='checkbox' className="navigation__checkbox" id='navigate' />
            <label htmlFor="navigate" className="navigation__button" >
                <span htmlFor="navigate" className="navigation__icon" >&nbsp;</span>
            </label>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink exact to="/" 
                        className="navigation__link"
                        activeClassName='active-class'>
                            home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink  to="/portfolio/website/top+fashion" 
                        className="navigation__link"
                        activeClassName='active-class'>
                        portfolio
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink exact to="/services" 
                        className="navigation__link"
                        activeClassName='active-class'>
                        services
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink exact to="/faq" 
                        activeClassName='active-class' 
                        className="navigation__link">
                        faq
                    </NavLink></li>
                <li className="navigation__item">
                    <NavLink to="/contact" 
                        activeClassName='active-class' 
                        className="navigation__link">
                            contact
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/reviews" 
                        activeClassName='active-class' 
                    className="navigation__link">reviews</NavLink></li>
            </ul>
        </nav>
    )
}