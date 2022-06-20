import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ variant, children }) => <Alert variant={variant}>{children}</Alert>;
AlertMessage.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertMessage.defaultProps = {
  variant: 'primary'
};

export default AlertMessage;
