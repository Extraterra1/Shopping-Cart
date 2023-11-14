import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const CardContainer = styled.div`
  background-color: #e3e3e3;
  padding: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  color: #3e3e3e;
  font-family: 'Open Sans';

  & > .content > .img {
    overflow: hidden;
    max-width: 50%;
    height: 25rem;
    margin: 0 auto;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    & img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > .content > .rating {
    text-align: center;
    font-size: 1.7rem;
    color: purple;
  }

  & > .content > .title {
    margin-top: 2rem;
    font-size: 1.3rem;
    text-align: center;
  }

  & > .content > .desc {
    font-size: 1.2rem;
    margin-top: 1rem;
    max-width: 90ch;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

const Card = ({ product }) => {
  return (
    <CardContainer>
      <div className="content">
        <div className="img">
          <img src={product.image} alt="" />
        </div>
        <div className="title">
          <h2>{product.title}</h2>
        </div>
        <div className="rating">
          <StarRating rating={product.rating.rate} />
        </div>
        <div className="desc">
          <p>{product.description}</p>
        </div>
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  product: PropTypes.object
};

export default Card;
