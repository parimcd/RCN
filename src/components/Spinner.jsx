import PropTypes from 'prop-types';
import { Spinner, Row } from 'react-bootstrap';

const Loading = ({ animation, variant, size }) => (
  <Row className="justify-content-md-center align-items-center">
    <Spinner animation={animation} variant={variant} size={size} />
  </Row>
);
Loading.propTypes = {
  animation: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
};
Loading.defaultProps = {
  animation: 'border',
  variant: 'secondary',
  size: ''
};

export default Loading;
