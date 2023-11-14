import PropTypes from 'prop-types';
import Header from './Header';
const Shop = ({ cart, products, setCart, error }) => {
  return (
    <>
      <Header cart={cart} />
      <h1>Hi</h1>
      <h1>Hi</h1>
    </>
  );
};

Shop.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string
};

export default Shop;
