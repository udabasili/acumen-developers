import React, {useState} from 'react'
import firebase from "../services/Firebase";
import { useEffect } from 'react';

export default function ReviewList() {
    const ref = firebase.firestore().collection('reviews');
    const [reviews, setReviews] = useState([])
    const onCollectionUpdate = (querySnapshot) => {
      const reviewsRecord = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        reviewsRecord.push(data)
        
      });
      setReviews(reviewsRecord)
    };

    useEffect(() => {
        ref.onSnapshot(onCollectionUpdate)
        return () => {
            
        }
    }, [ref])

    
    return (
      <div className="review-list">
        <h2 className="header-secondary">Reviews </h2>
        <ul className="review__list">
          {reviews.length > 0 &&
            reviews.map((review, index) => (
              <li key={index} className="review__item">
                <div className="name">{review.name}</div>
                <div className="detail">
                  <span className="label">Website name: </span>
                  <span className="value">{review.websiteName}</span>
                </div>
                <div className="detail">
                  <span className="label">Website url: </span>
                  <span className="value">{review.websiteUrl}</span>
                </div>
                <div className="detail">
                  <span className="label">Date Completed: </span>
                  <span className="value">{review.dateOfCompletion}</span>
                </div>
                <div className="review">
                  <q>{review.review}</q>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
}
