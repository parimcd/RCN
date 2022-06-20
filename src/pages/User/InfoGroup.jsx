import PropTypes from 'prop-types';
import Title from '../../components/Title';
import LabelValue from '../../components/LabelValue';
import { Row } from 'react-bootstrap';

const InfoGroup = ({ title, info }) => {
  return (
    <Row className="pt-5">
      <Title>
        <span className="text-info fs-6">{title}</span>
      </Title>
      {info.map((i, idx) => (
        <LabelValue label={i.title} value={i.data} key={idx} variant="primary" />
      ))}
    </Row>
  );
};
InfoGroup.propTypes = {
  title: PropTypes.string,
  info: PropTypes.object
};
InfoGroup.default = {
  title: '',
  info: {}
};

export default InfoGroup;
