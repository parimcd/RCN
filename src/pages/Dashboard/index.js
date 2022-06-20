import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getUsers, setUser } from '../../redux/user/user.actions';
import {
  usersSelector,
  currentPageSelector,
  selectedUserSelector,
  isLoadingSelector,
  isErrorSelector
} from '../../redux/user/user.selectors';
import { filterByPartName } from '../../_helpers';
import UserList from './UserList';
import Button from '../../components/Button';
import Pagers from '../../components/Pagers';
import BreadcrumbItems from '../../components/BreadcrumbItems';
import SearchForm from '../../components/SearchForm';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/Alert';
import styled from 'styled-components';
const ErrorContainer = styled.div`
  min-height: 50px;
  margin: 1rem 0;
`;

function Dashboard() {
  const [searchResults, setSearchResults] = useState({
    filteredUsers: [],
    searchError: false
  });
  const { filteredUsers, searchError } = searchResults;
  const [nameToFilter, setNameToFilter] = useState('');
  const dispatch = useDispatch();
  const usersList = useSelector(usersSelector);
  const lastViewedUser = useSelector(selectedUserSelector);
  const currentPage = useSelector(currentPageSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);
  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, []);
  const onFilterChange = (e) => setNameToFilter(e.target.value);
  const onFilterSubmit = (e) => {
    e.preventDefault();
    if (nameToFilter !== '') {
      const results = filterByPartName(usersList, nameToFilter);
      if (results.length === 0) {
        setSearchResults({ filteredUsers: results, searchError: true });
      } else {
        setSearchResults({ filteredUsers: results, searchError: false });
      }
    }
  };
  const onResetSearchClick = () => {
    setNameToFilter('');
    setSearchResults({ filteredUsers: [], searchError: false });
  };
  const onSelected = (user) => dispatch(setUser(user));
  const onPageClick = (page) => {
    if (page !== currentPage) dispatch(getUsers(page));
  };
  const breadcrumbItems = [{ path: '/', text: 'Home' }, { text: 'Dashboard' }];
  const renderLastViewButton = <Button path="/user">Recently Viewed</Button>;
  const renderSearchForm = (
    <Row className=" justify-content-md-center align-items-center">
      <Col>
        {filteredUsers.length || searchError ? (
          <Button variant="danger" onClick={onResetSearchClick}>
            Reset Search
          </Button>
        ) : (
          <SearchForm
            value={nameToFilter}
            placeholder="by any part of full name"
            onChange={onFilterChange}
            onSubmit={onFilterSubmit}
          />
        )}
      </Col>
      <Col md="auto">{lastViewedUser && renderLastViewButton}</Col>
    </Row>
  );
  const renderAllUsers = (
    <Row className="m-0">
      <Title center>
        <span className="text-dark">{`Showing users page #${currentPage}`}</span>
      </Title>
      <Row>
        {usersList &&
          usersList.map((user, i) => (
            <Col sm={12} xxl={6} key={i}>
              <UserList onSelected={onSelected} user={user} />
            </Col>
          ))}
      </Row>
      <Pagers current={currentPage} onClick={onPageClick} />
    </Row>
  );
  const renderFilteredUsers = (
    <Row className="m-0">
      <Title center>
        <span className="text-dark">
          {`Found ${filteredUsers.length} user${
            filteredUsers.length > 1 ? `s` : ``
          } of '${nameToFilter}'`}
        </span>
      </Title>
      <Row>
        {filteredUsers.map((user, i) => (
          <Col sm={12} xxl={6} key={i}>
            <UserList onSelected={onSelected} user={user} />
          </Col>
        ))}
      </Row>
    </Row>
  );

  return (
    <Container fluid="lg" className="p-5">
      <BreadcrumbItems items={breadcrumbItems} />
      {renderSearchForm}
      <ErrorContainer>
        {isLoading && <Spinner />}
        {isError && <ErrorMessage variant="danger">Something went wrong!</ErrorMessage>}
      </ErrorContainer>
      {filteredUsers.length || searchError ? renderFilteredUsers : renderAllUsers}
    </Container>
  );
}

export default Dashboard;
