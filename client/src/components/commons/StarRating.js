import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  // Round the rating to the nearest half star
  const roundedRating = Math.round(rating * 2) / 2;
  // Calculate the number of full stars
  const fullStars = Math.floor(roundedRating);
  // Determine whether to display a half star
  const hasHalfStar = roundedRating - fullStars === 0.5;

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(5 - Math.ceil(roundedRating))].map((_, index) => (
        <FontAwesomeIcon icon={farStar} key={index + fullStars} />
      ))}
    </div>
  );
};

export default StarRating;
