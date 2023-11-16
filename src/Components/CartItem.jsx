import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    max-height: 15rem;
    width: 100%;
    & img {
      border-radius: 1rem;
      width: inherit;
      max-height: inherit;
      object-fit: contain;
    }
  }
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px dashed #e3e3e3;

  & h2 {
    font-weight: 400;
  }

  & span {
    font-weight: 700;
  }
`;

const CartItem = ({ product, quantity }) => {
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
        </h2>
        <h2>
          Price: <span>${product.price}</span>
        </h2>
      </ProductPrice>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number
};

export default CartItem;
