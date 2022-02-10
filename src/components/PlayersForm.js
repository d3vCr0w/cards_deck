import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import AppNavbar from './AppNavbar';

function PlayersForm() {
  return (
    <>
      <AppNavbar />
      <br />
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Player 1</Form.Label>
                <Form.Control type='text' placeholder='John Doe' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Player 2</Form.Label>
                <Form.Control type='text' placeholder='Jane Doe' />
              </Form.Group>
            </Col>
          </Row>

          <Button variant='outline-success' type='submit'>
            Enter
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default PlayersForm;
