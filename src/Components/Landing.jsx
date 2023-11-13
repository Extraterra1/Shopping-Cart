import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Header from './Header.jsx';

const MainContainer = styled.main`
  display: flex;
  padding: 5rem;
`;

const Hero = styled.section`
  margin: 0 auto;
  padding: 8rem;
  border-radius: 0.3rem;
  font-family: 'Chakra Petch';
  background-color: #3a5417;
  text-align: center;

  & h1.hero-title {
    font-size: 8rem;
  }

  & p.hero-slogan {
    font-size: 5rem;
  }
`;

export default function Landing() {
  return (
    <>
      <Header />
      <MainContainer>
        <Hero>
          <h1 className="hero-title">Pixel Emporium</h1>
          <p className="hero-slogan">Transforming Visions into Virtual Brilliance!</p>
        </Hero>
      </MainContainer>
    </>
  );
}
