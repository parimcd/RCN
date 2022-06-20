import PropTypes from 'prop-types';
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbItems = ({ items }) => (
  <>
    <Breadcrumb>
      {items.map((i, idx) => (
        <Breadcrumb.Item active={!i.path} href={i.path} key={idx}>
          {i.text}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </>
);
BreadcrumbItems.propTypes = {
  items: PropTypes.array
};

export default BreadcrumbItems;
