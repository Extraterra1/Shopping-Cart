import PropTypes from 'prop-types';
import styled from 'styled-components';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';
import Header from './Header';
import Card from './Card';
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

const ShopSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #5c5c5c;

  & .title {
    font-family: 'Chakra Petch';
    & h1 {
      font-size: 6rem;
    }
    & p {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    & > .title > h1 {
      font-size: 5rem;
    }
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  justify-items: center;
  gap: 5rem;

  margin-top: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;

const SpinnerOverride = {
  margin: '0 auto',
  marginTop: '5rem'
};

const Shop = ({ cart, products, setCart, error, loading }) => {
  return (
    <>
      <Header cart={cart} />
      <MainContainer>
        <ShopSection>
          <div className="title">
            <h1>Explore the Pixel Perfection</h1>
            <p>Uncover a Symphony of Digital Innovation in Our Exclusive Product Collection!</p>
          </div>
          <BounceLoader loading={loading} cssOverride={SpinnerOverride} color="#804be2" size={100} speedMultiplier={3} />
          <ProductsGrid>
            {products.map((e) => (
              <Card key={e.id} product={e} />
            ))}
          </ProductsGrid>
        </ShopSection>
      </MainContainer>
      <Footer />
    </>
  );
};

Shop.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default Shop;
