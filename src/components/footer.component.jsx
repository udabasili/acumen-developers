import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="/contact" className="footer__link">Contact</a></li>
                            <li className="footer__item"><a href="/faq" className="footer__link">Faq</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Copyright &#169; 2020 Acumen Developers - All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
