import PropTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';
import Button from './Button';

const SearchForm = ({ value, placeholder, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Row className="align-items-md-center">
        <Col xs="auto">Filter users</Col>
        <Col xs lg="5">
          <Form.Control type="text" value={value} placeholder={placeholder} onChange={onChange} />
        </Col>
        <Col xs="auto" lg="2">
          <Button variant="info" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
SearchForm.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchForm;
