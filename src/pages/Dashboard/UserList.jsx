import PropTypes from 'prop-types';
import { ListGroup, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from '../../components/Button';

const UserList = ({ user, onSelected }) => {
  const {
    picture: { thumbnail },
    location: { city, country },
    name: { first, last }
  } = user;
  const fullName = `${first} ${last}`;

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center rounded-bottom mb-2 bg-light">
      <Col sm="auto">
        <Image src={thumbnail} roundedCircle className="m-2" />
      </Col>
      <Col sm={5}>{fullName}</Col>
      <Col sm={4} className="d-md-block d-sm-none">
        {city}, {country}
      </Col>
      <Col sm={2}>
        <Button path="/user" onClick={() => onSelected(user)} variant="outline-secondary">
          Details
        </Button>
      </Col>
    </ListGroup.Item>
  );
};
UserList.propTypes = {
  user: PropTypes.object.isRequired,
  onSelected: PropTypes.func.isRequired
};
UserList.defaultProps = {
  user: {}
};

export default UserList;
