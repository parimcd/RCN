import PropTypes from 'prop-types';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const StyledNav = styled.div`
  height: 50px;
  background-color: #303030;
`;
const StyledBody = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
`;

const Layout = ({ children }) => (
  <>
    <StyledNav>
      <Navbar>
        <Container>
          <Navbar.Brand href="/" className="text-white">
            Random Users
          </Navbar.Brand>
        </Container>
      </Navbar>
    </StyledNav>
    <StyledBody>{children}</StyledBody>
  </>
);
Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
