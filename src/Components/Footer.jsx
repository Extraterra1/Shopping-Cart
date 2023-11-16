import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #3e3e3e;
  padding: 1rem;
  font-size: 1.5rem;
  display: grid;
  place-items: center;
`;

export default function Footer() {
  return <StyledFooter>The Odin Project&copy; 2023</StyledFooter>;
}
