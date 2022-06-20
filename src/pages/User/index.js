import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { formatDate, remainingDays, capitalizeFirstLetter } from '../../_helpers';
import { selectedUserSelector } from '../../redux/user/user.selectors';
import InfoGroup from './InfoGroup';
import BreadcrumbItems from '../../components/BreadcrumbItems';

function User() {
  const user = useSelector(selectedUserSelector);
  const {
    cell,
    dob: { age, date: birthdate },
    email,
    gender,
    location: {
      city,
      country,
      postcode,
      state,
      street: { name: streetName, number: streetNumber }
    },
    login: { username },
    name: { first, last, title },
    phone,
    picture: { large },
    registered: { age: registeredAge, date: registeredDate }
  } = user;
  const fullName = `${first} ${last}, ${title}`;
  const address = `${streetNumber} ${streetName}, ${city}, ${state} ${postcode} ${country}`;
  const breadcrumbItems = [
    { path: '/', text: 'Home' },
    { path: '/dashboard', text: 'Dashboard' },
    { text: fullName }
  ];
  const contactInfo = [
    { title: 'Phone', data: phone },
    { title: 'Cell', data: cell },
    { title: 'Email', data: email },
    { title: 'Address', data: address }
  ];
  const basicInfo = [
    {
      title: 'Birthday',
      data: formatDate(birthdate)
    },
    {
      title: 'Next birthday in',
      data: `${remainingDays(birthdate, age)} Days`
    },
    { title: 'Gender', data: capitalizeFirstLetter(gender) },
    { title: 'Age', data: age }
  ];
  const registeredInfo = [
    { title: 'Username', data: username },
    { title: 'Date Registerd', data: formatDate(registeredDate) },
    { title: 'Since', data: `${registeredAge} Yrs. ago` }
  ];

  return (
    <Container className="p-5">
      <BreadcrumbItems items={breadcrumbItems} />
      <Row className="mt-5">
        <Row className="fs-2 fw-bold d-md-none d-sm-block">{fullName}</Row>
        <Col sm={12} md={6} lg={4} className="px-0">
          <Image src={large} className="rounded float-left w-75" />
          <InfoGroup title="Registered Information" info={registeredInfo} />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <Row className="fs-2 fw-bold d-md-block d-sm-none">{fullName}</Row>
          <InfoGroup title="Contact Information" info={contactInfo} />
          <InfoGroup title="Basic Information" info={basicInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default User;
