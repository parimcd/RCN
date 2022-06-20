import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const Pagers = ({ first, last, current, onClick }) => {
  const pageOptions = [];
  const isCurrent = (page) => page === current;
  for (let i = current - 2; i <= current + 2; i++) {
    if (i > 1 && i < last) {
      pageOptions.push(
        <Pagination.Item key={i} active={isCurrent(i)} onClick={() => onClick(i)}>
          {i}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination className="justify-content-center mt-2">
      <Pagination.First disabled={isCurrent(first)} onClick={() => onClick(first)} />
      <Pagination.Prev onClick={() => onClick(current - 1)} disabled={isCurrent(first)} />
      <Pagination.Item onClick={() => onClick(first)} active={isCurrent(first)}>
        {first}
      </Pagination.Item>
      <Pagination.Ellipsis />
      {pageOptions}
      <Pagination.Ellipsis />
      <Pagination.Item onClick={() => onClick(last)} active={isCurrent(last)}>
        {last}
      </Pagination.Item>
      <Pagination.Next onClick={() => onClick(current + 1)} disabled={isCurrent(last)} />
      <Pagination.Last onClick={() => onClick(last)} disabled={isCurrent(last)} />
    </Pagination>
  );
};
Pagers.propTypes = {
  first: PropTypes.number,
  last: PropTypes.number,
  current: PropTypes.number.isRequired,
  onClick: PropTypes.func
};
Pagers.defaultProps = {
  first: 1,
  last: 20
};

export default Pagers;
