import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Cart = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <h1>Hey</h1>
      <Footer />
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;
