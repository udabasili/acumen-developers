import React from 'react'
import { NavLink, useLocation} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/images/acumen-developers-logo.svg'

export default function Navigation() {
    const { pathname } = useLocation()
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
            <div className="logo">
                <Logo className='logo__icon' />
                <span className='logo__text'>
                    <span>Acumen</span>
                    Developers
                </span>
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
                    <NavLink  to="/portfolio" 
                        className="navigation__link"
                        isActive={() => pathname.includes('portfolio') }
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
                    <NavLink to="/about" 
                        activeClassName='active-class' 
                        className="navigation__link">
                            about
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}