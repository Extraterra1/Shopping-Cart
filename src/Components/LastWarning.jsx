import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  background-color: red;
  padding: 5rem;
`;

const LastWarning = ({ id }) => {
  return (
    <Modal>
      <h1>Hi</h1>
    </Modal>
  );
};

LastWarning.propTypes = {
  id: PropTypes.number
};

export default LastWarning;
