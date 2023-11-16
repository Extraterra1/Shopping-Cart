import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  border-bottom: 2px dashed white;
  padding-bottom: 3rem;
  padding-top: 3rem;

  &:first-child {
    padding-top: 0;
  }

  & h2 {
    font-size: 2rem;
    color: var(--light);
  }

  & .img {
    max-height: 10rem;
    width: 15rem;
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    & img {
      width: inherit;
      max-height: inherit;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 700px) {
    border-bottom: none;

    & h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    & .img {
      width: 10rem;
    }
  }
`;

const ProductPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 2px dashed #e3e3e3;

  & h2 {
    font-weight: 400;
  }

  & span {
    font-weight: 700;
    font-size: 1.9rem;
  }

  @media screen and (max-width: 700px) {
    padding-bottom: 2rem;
  }
`;

const QuantityIconsContainer = styled.span`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;

  & svg {
    transition:
      transform 0.3s ease-in,
      color 0.5s ease;
  }

  & svg:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  & svg:first-child:hover {
    color: #85ff3e !important;
  }
  & svg:last-child:hover {
    color: #ff3d87 !important;
  }
`;

const CartItem = ({ product, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      <ProductInfo>
        <div className="img">
          <img src={product.image} alt="" />
        </div>
        <h2>{product.title}</h2>
      </ProductInfo>
      <ProductPrice>
        <h2>
          Quantity: <span>{quantity}</span>
          <QuantityIconsContainer>
            <Icon onClick={() => increaseQuantity(product.id)} color="#28a745" icon="ion:plus" />
            <Icon onClick={() => decreaseQuantity(product.id)} color="#dc3545" icon={quantity === 1 ? 'ion:trash' : 'ion:minus'} />
          </QuantityIconsContainer>
        </h2>
        <h2>
          Price: <span>${product.price.toFixed(2)}</span>
        </h2>
      </ProductPrice>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func
};

export default CartItem;
