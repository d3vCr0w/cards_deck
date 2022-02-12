import { Container, Navbar } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Deck Of Cards Game</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
