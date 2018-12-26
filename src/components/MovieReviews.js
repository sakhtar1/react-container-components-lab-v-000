// Code MovieReviews Here
<<<<<<< HEAD
import React from 'react';
const Review = ({ title, content }) => {
  return(
  <div className="review">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
  )
}
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  { reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
=======

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  { reviews.map(review => <Review={review.review} />) }
  </div>
>>>>>>> 109131b273914597e9a4d8e5b735a6c5e4a13314
