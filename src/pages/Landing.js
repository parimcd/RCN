import Button from '../components/Button';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  background-image: url('/images/bg-horse.jpg');
  background-size: cover;
  background-position: top;
  min-height: 100%;
  height: 100vh;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: 600;
  margin-bottom: 1em;
`;
const H2 = styled.h2`
  font-size: 2.1em;
  font-style: italic;
`;

function Landing() {
  return (
    <StyledWrapper>
      <H2>Welcome To Our Website!</H2>
      <H1>It&apos;s Nice To Meet You</H1>
      <Button path="/dashboard" size="lg" variant="info">
        VIEW USERS
      </Button>
    </StyledWrapper>
  );
}

export default Landing;
