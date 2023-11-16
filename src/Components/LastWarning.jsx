import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  background-color: var(--gray-dark);
  border-radius: 0.5rem;
  padding: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  & h1 {
    grid-column: 1/3;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 1rem 5rem;
  font-size: 2rem;
  background-color: ${(props) => (props.$danger ? 'var(--danger)' : 'var(--success)')};
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
    outline: 2px solid #58349b;
  }
`;

const LastWarning = ({ id, remove }) => {
  return (
    <Modal>
      <h1>Remove item from cart?</h1>
      <Button onClick={() => remove(id)}>Yes</Button>
      <Button $danger>No</Button>
    </Modal>
  );
};

LastWarning.propTypes = {
  id: PropTypes.number,
  remove: PropTypes.func
};

export default LastWarning;
