import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    font-size: 4rem;
    font-family: 'Chakra Petch';
    letter-spacing: 1px;
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

const Cart = ({ cart }) => {
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
