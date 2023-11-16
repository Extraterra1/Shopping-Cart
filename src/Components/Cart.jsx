import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import getCartPrice from '../Helpers/getCartPrice';
import Header from './Header';
import CartItem from './CartItem';
import Footer from './Footer';
import LastWarning from './LastWarning';

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
  min-height: 100%;

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

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
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
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }

  & h4 {
    text-align: right;
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 700px) {
    grid-column: auto;
  }
`;

const CheckoutButton = styled.button`
  padding: 1rem 5rem;
  font-size: 2rem;
  background-color: var(--purple);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  margin: 0 auto;

  &:hover {
    background-color: #804be2;
    transform: scale(1.1);
    outline: 2px solid #58349b;
  }
`;

const Cart = ({ cart, setCart }) => {
  const { total, vat, subTotal } = getCartPrice(cart);
  const [lastWarning, setLastWarning] = useState(null);

  const increaseQuantity = (id) => {
    const newCart = cart.map((e) => {
      if (e.product.id !== id) return e;
      return { ...e, quantity: e.quantity + 1 };
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart.reduce((result, e) => {
      if (e.product.id !== id) result.push(e);
      if (e.product.id === id && e.quantity > 1) result.push({ ...e, quantity: e.quantity - 1 });
      if (e.product.id === id && e.quantity === 1) {
        result.push(e);
        setLastWarning(<LastWarning id={id} remove={removeFromCart} setLastWarning={setLastWarning} />);
      }
      return result;
    }, []);
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((e) => e.product.id !== id);
    setCart(newCart);
    setLastWarning(null);
  };

  return (
    <>
      {lastWarning}
      <Header cart={cart} />
      <MainContainer>
        <CartSection>
          <h1 className="title">Your Cart</h1>
          {cart.length === 0 && EmptyCartMessage}
          {cart.length > 0 && (
            <>
              <CartGrid>
                {cart.map((e) => (
                  <CartItem
                    key={e.product.id}
                    product={e.product}
                    quantity={e.quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                ))}
                <CartTotal>
                  <h4>Subtotal: ${subTotal}</h4>
                  <h4>VAT (23%): ${vat}</h4>
                  <h3>Your Total: ${total}</h3>
                </CartTotal>
              </CartGrid>
              <CheckoutButton>Check Out</CheckoutButton>
            </>
          )}
        </CartSection>
      </MainContainer>
      <Footer />
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func
};

export default Cart;
