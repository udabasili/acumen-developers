import React,{useEffect} from 'react'
import ComponentTitle from './component-title.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { websitePortfolioData } from '../data/website-portfolio.data';

export default function Portfolio() {

    const scroller = () => {
        const portfolioItems = document.querySelector('.portfolios')
        const leftButton = document.querySelector('.left')
        const rightButton = document.querySelector('.right')
        leftButton.onclick = function () {
            portfolioItems.scrollLeft -= 120
        }
        rightButton.onclick = function () {
            portfolioItems.scrollLeft += 120
        }
    }
    useEffect(() => {
        scroller()
    }, [])

    return (
        <section className='section-portfolios'>
            <div className='portfolios__header'>
                <ComponentTitle title='Portfolios' />
                <div className='scroll-button'>
                    <FontAwesomeIcon icon={faCaretSquareLeft} className='arrow left' onClick={() => scroller('left')} />
                    <FontAwesomeIcon icon={faCaretSquareRight} className='arrow right' onClick={() => scroller('right')} />
                </div>
            </div>
            <div className='portfolios'>
                {websitePortfolioData.map((item) => {
                    return (
                         <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='portfolios__item' key={item.index}
                            >
                            <div className='portfolios__image'>
                                <img src={item.logo} alt={item.name} />
                            </div>
                            <div className='portfolios__title'>
                                {item.name}
                            </div>
                    </a>
                        
                    )
                })}
            </div>
        </section>
    )
}
