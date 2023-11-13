import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Header from './Header.jsx';

const MainContainer = styled.div`
  display: flex;
  padding: 5rem;
`;

const Hero = styled.div`
  margin: 0 auto;
  padding: 8rem;
  border-radius: 0.3rem;
  font-family: 'Chakra Petch';
  font-size: 5rem;
  background-color: #3a5417;
  text-align: center;
`;

export default function Landing() {
  return (
    <>
      <Header />
      <MainContainer>
        <Hero>
          <h1>Pixel Emporium</h1>
          <p>Transforming Visions into Virtual Brilliance!</p>
        </Hero>
      </MainContainer>
    </>
  );
}
