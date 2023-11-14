import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  return (
    <>
      <Icon icon="ion:ios-star" />
      <Icon icon="ion:ios-star" />
      <Icon icon="ion:ios-star" />
      <Icon icon="ion:ios-star" />
      <Icon icon="ion:ios-star" />
    </>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number
};

export default StarRating;
