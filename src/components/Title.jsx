import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Title = ({ center, children }) => (
  <Row>
    {center && (
      <Col>
        <hr />
      </Col>
    )}
    <Col md="auto" className="px-0 fw-bold">
      {children}
    </Col>
    <Col>
      <hr />
    </Col>
  </Row>
);
Title.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.element
};

export default Title;
