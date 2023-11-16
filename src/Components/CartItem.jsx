import PropTypes from 'prop-types';
// import styled from 'styled-components';

const CartItem = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object
};

export default CartItem;
