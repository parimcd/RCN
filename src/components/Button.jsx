import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Buttons = ({ path, variant, size, onClick, children, type }) => {
  if (path)
    return (
      <Link onClick={onClick} to={path}>
        <Button variant={variant} size={size}>
          {children}
        </Button>
      </Link>
    );

  return (
    <Button href={path} onClick={onClick} variant={variant} type={type} size={size}>
      {children}
    </Button>
  );
};
Buttons.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string
};
Buttons.defaultProps = {
  type: 'button',
  variant: 'info',
  size: 'sm'
};

export default Buttons;
