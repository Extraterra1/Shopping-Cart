import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
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

  & h1 {
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

const Cart = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <MainContainer>
        <CartSection>
          <h1 className="title">Your Cart</h1>
          <CartGrid>Item Item</CartGrid>
        </CartSection>
      </MainContainer>
      {/* <Footer /> */}
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;
