import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderNav = styled.nav`
  background-color: #3e3e3e;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: ${(props) => (props.$sticky ? 'sticky' : 'relative')};
  top: 0;

  & > span.title {
    display: grid;
    place-items: center;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      color: #eee;
      transform: scale(1.04);
    }
  }

  @media screen and (max-width: 700px) {
    padding: 2rem;
    & > span.title {
      font-size: 3rem;
    }
  }
`;

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > span {
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
  }

  & > *:hover {
    color: white;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 5rem;
  align-items: center;

  & span.cart {
    position: relative;
    padding: 1rem;
    cursor: pointer;
    & > svg {
      font-size: 4rem;
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 700px) {
    margin-right: 1rem;
  }
`;

const CartCount = styled.span`
  position: absolute;
  font-weight: 700;
  right: 0;
  background-color: #eee;
  color: var(--danger);
  font-size: 1.2rem;
  padding: 0 0.5rem;
  border-radius: 50%;
  aspect-ratio: 1/1;
  visibility: ${(props) => (props.children > 0 ? 'visible' : 'hidden')};
`;

const Header = ({ cart, sticky = false }) => {
  return (
    <HeaderNav $sticky={sticky}>
      <span className="title">
        <Link to="/">Pixel Emporium</Link>
      </span>
      <SideWrapper>
        <span>
          <Link to="/shop">Shop</Link>
        </span>
        <SocialsWrapper>
          <Link to="/cart">
            <span className="cart">
              <CartCount>{cart.length}</CartCount>
              <Icon icon="ion:cart" />
            </span>
          </Link>
        </SocialsWrapper>
      </SideWrapper>
    </HeaderNav>
  );
};

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  sticky: PropTypes.bool
};

export default Header;
