import PropTypes from 'prop-types';
import styled from 'styled-components';
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
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  justify-items: center;
  gap: 5rem;

  margin-top: 5rem;
`;

const Shop = ({ cart, products, setCart, error }) => {
  return (
    <>
      <Header cart={cart} />
      <MainContainer>
        <ShopSection>
          <div className="title">
            <h1>Explore the PixelPerfection</h1>
            <p>Uncover a Symphony of Digital Innovation in Our Exclusive Product Collection!</p>
          </div>
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
  error: PropTypes.string
};

export default Shop;
