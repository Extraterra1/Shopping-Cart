import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import StarRating from './StarRating';

const CardContainer = styled.div`
  background-color: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  color: #3e3e3e;
  font-family: 'Open Sans';

  & > .content {
    display: grid;
    grid-template-rows: 2fr auto auto 1fr auto;
    height: 100%;
    align-items: center;
  }

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
    display: flex;
    align-items: center;
    &:first-letter {
      text-transform: uppercase;
    }
  }

  & > .content > .price {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-top: 2rem;
    letter-spacing: 2px;
    font-weight: 700;
    & p {
      display: flex;
      align-items: center;
    }
    & svg {
      display: flex;
      align-items: center;
      color: var(--success);
    }
    & button {
      padding: 1rem 5rem;
      font-size: 1.5rem;
      background-color: var(--purple);
      transition:
        transform 0.3s ease,
        background-color 0.3s ease;

      &:hover {
        background-color: #804be2;
        transform: scale(1.1);
        outline: 2px solid #58349b;
      }
    }
  }
`;

const Card = ({ product, addToCart }) => {
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
        <div className="price">
          <p>
            <span>
              <Icon icon="ion:logo-usd" />
            </span>
            {product.price.toFixed(2)}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func
};

export default Card;
