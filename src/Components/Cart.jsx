import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import getCartPrice from '../Helpers/getCartPrice';
import Header from './Header';
import CartItem from './CartItem';
import Footer from './Footer';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  & > section {
    padding: 5rem;
    display: flex;
  }

  @media screen and (max-width: 700px) {
    & > section {
      padding: 3rem;
    }
  }
`;

const CartSection = styled.section`
  background-color: #5c5c5c;
  flex-direction: column;
  gap: 5rem;

  & > h1 {
    font-size: 6rem;
    font-family: 'Chakra Petch';
    letter-spacing: 1px;
    color: #d3d3d3;
  }
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px dashed #e3e3e3;
  padding: 3rem;
`;

const EmptyCartMessageDiv = styled.div`
  padding: 1rem;

  & h2 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  & p {
    margin-top: 3rem;
    font-size: 1.5rem;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    transition: all 0.3s ease-in;
    font-weight: 700;

    &:hover {
      color: #fdfdfd;
      text-underline-offset: 1rem;
    }
  }
`;

const EmptyCartMessage = (
  <EmptyCartMessageDiv>
    <h2>You don't have any items in your cart :(</h2>
    <p>
      <Link to="/shop">Go to shop</Link>
    </p>
  </EmptyCartMessageDiv>
);

const CartTotal = styled.div`
  grid-column: 1/3;
  padding-top: 3rem;
  justify-self: end;

  & h3 {
    font-size: 2rem;
  }

  & h4 {
    text-align: right;
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Cart = ({ cart }) => {
  console.log(getCartPrice(cart));
  return (
    <>
      <Header cart={cart} />
      <MainContainer>
        <CartSection>
          <h1 className="title">Your Cart</h1>
          {cart.length === 0 && EmptyCartMessage}
          {cart.length > 0 && (
            <CartGrid>
              {cart.map((e) => (
                <CartItem key={e.product.id} product={e.product} quantity={e.quantity} />
              ))}
              <CartTotal>
                <h4>Subtotal: $42.90</h4>
                <h4>VAT (23%)</h4>
                <h3>Your Total: $43.00</h3>
              </CartTotal>
            </CartGrid>
          )}
        </CartSection>
      </MainContainer>
      <Footer />
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;
