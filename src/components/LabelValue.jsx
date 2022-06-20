import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const LabelValue = ({ label, value }) => (
  <Row className="text-secondary mt-2">
    <Col md="auto" className="fw-bold px-0">
      {label} :
    </Col>
    <Col className="">{value}</Col>
  </Row>
);
LabelValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};
LabelValue.defaultProps = {
  label: '',
  value: ''
};

export default LabelValue;
