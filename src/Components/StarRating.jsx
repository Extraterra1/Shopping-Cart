import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const StarRating = ({ rating }) => {
  const int = parseInt(rating);
  const float = rating % 1;
  const stars = [];
  for (let i = 0; i < int; i++) {
    stars.push(<Icon key={uuid()} icon="ion:ios-star" />);
  }
  if (float >= 0.5) stars.push(<Icon key={uuid()} icon="ion:ios-star-half" />);
  if (stars.length < 5) {
    const starsToAdd = 5 - stars.length;
    for (let i = 0; i < starsToAdd; i++) {
      stars.push(<Icon key={uuid()} icon="ion:ios-star-outline" />);
    }
  }
  return <>{stars}</>;
};

StarRating.propTypes = {
  rating: PropTypes.number
};

export default StarRating;
