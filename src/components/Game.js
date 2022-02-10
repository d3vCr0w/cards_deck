import { Button, Col, Container, Row } from 'react-bootstrap';
import AppNavbar from './AppNavbar';

function Game() {
  return (
    <>
      <AppNavbar />
      <br />
      <Container>
        <Row>
          <Col>Player 1</Col>
          <Col>
            <Button variant='outline-success' type='button'>
              &#9658;
            </Button>
          </Col>
          <Col>Player 2</Col>
        </Row>
        <hr />
        <Row></Row>
        <hr />
        <Row></Row>
      </Container>
    </>
  );
}

export default Game;
