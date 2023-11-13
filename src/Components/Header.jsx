import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const HeaderNav = styled.nav`
  background-color: #3e3e3e;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;

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

  & > span.cart {
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
  top: 0;
  right: 0;
  background-color: #eee;
  color: var(--danger);
  font-size: 1.2rem;
  padding: 0 0.5rem;
  border-radius: 50%;
  aspect-ratio: 1/1;
  visibility: ${(props) => (props.count > 0 ? 'visible' : 'hidden')};
`;

export default function Header() {
  return (
    <HeaderNav>
      <span className="title">
        <Link>Pixel Emporium</Link>
      </span>
      <SideWrapper>
        <span>Shop</span>
        <SocialsWrapper>
          <span className="cart">
            <CartCount count={1}>1</CartCount>
            <Icon icon="ion:cart" />
          </span>
        </SocialsWrapper>
      </SideWrapper>
    </HeaderNav>
  );
}
