import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  background-color: #eee;
`;

const Card = ({ product }) => {
  return <h1>hi</h1>;
};

Card.propTypes = {
  product: PropTypes.object
};

export default Card;
