import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import { faq } from '../data/faq.data'

export default class FAQPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='faq-page'>
                <MainHeading title='faq'/>
                <section className="faq">
                    {faq.map((data) =>(
                        <React.Fragment key={data.key}>
                            <h2 className="faq__question header-tertiary  u-margin-bottom-small">
                                {data.question}
                            </h2>
                            <p className="faq__answer paragraph">
                                {data.answer}
                            </p>
                        </React.Fragment>
                    ))}
                </section>
            </div>
        )
    }
}
