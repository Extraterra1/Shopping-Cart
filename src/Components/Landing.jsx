import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Header from './Header.jsx';
import officeImg from '../assets/office.jpg';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  & > section {
    padding: 5rem;
    display: flex;
  }
`;

const Hero = styled.div`
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

const WhoWeAre = styled.section`
  background-color: #e3e3e3;
  flex-direction: column;
  color: #3e3e3e;

  & h2.wwa-title {
    font-weight: 700;
    font-size: 5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 1.8rem;
    max-width: 110ch;
    letter-spacing: 2px;
    text-align: justify;
    margin-bottom: 2rem;
  }
`;

const WhoWeAreGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 5rem;

  & .wwa-img {
    & img {
      object-fit: cover;
      width: 100%;
      border-radius: 0.5rem;
    }
  }
`;

export default function Landing() {
  return (
    <>
      <Header />
      <MainContainer>
        <section className="hero">
          <Hero>
            <h1 className="hero-title">Pixel Emporium</h1>
            <p className="hero-slogan">Transforming Visions into Virtual Brilliance!</p>
          </Hero>
        </section>
        <WhoWeAre>
          <h2 className="wwa-title">Who we are</h2>
          <WhoWeAreGrid>
            <div className="wwa-content">
              <p>
                At PixelEmporium, we are the architects of digital dreams and the curators of creativity. Born out of a passion for pixel-perfect innovation, we
                are a team of enthusiasts dedicated to bringing your visions to life in the vibrant realm of pixels.
              </p>
              <p>
                Our journey began with the belief that every pixel tells a story, and in our emporium, those stories come alive. We are more than just an online
                shop; we are a community of artists, dreamers, and tech aficionados who share a common love for the limitless possibilities of the digital
                canvas.
              </p>
              <p>
                What sets us apart is our commitment to quality, originality, and the seamless fusion of art and technology. PixelEmporium is not just a
                destination for products; it's a celebration of the boundless creativity that pixels can unlock.
              </p>
              <p>
                Join us on this exciting adventure into the digital landscape, where imagination knows no limits. Whether you're a creator, a collector, or
                someone seeking a touch of virtual magic, PixelEmporium is where your digital journey begins. Welcome to our world of endless pixels and endless
                possibilities.
              </p>
            </div>
            <div className="wwa-img">
              <img src={officeImg} alt="" />
            </div>
          </WhoWeAreGrid>
        </WhoWeAre>
      </MainContainer>
    </>
  );
}
