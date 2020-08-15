import React, { Component } from 'react'
import MainHeading from '../components/main-heading.component'
import AddReview from '../components/add-review.component'
import ReviewList from '../components/review-list.component'

export default class ReviewsPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='review-page'>
                <MainHeading title='review'/>
                <AddReview/>
                <ReviewList/>
            </div>
        )
    }
}
