import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from './AppNavbar';

function PlayersForm() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const DECK_URL = 'http://deckofcardsapi.com/api/deck/new/';

  const navigate = useNavigate();

  const handlePlayer1Change = ({ target }) => {
    setPlayer1(target.value);
  };

  const handlePlayer2Change = ({ target }) => {
    setPlayer2(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deckResponse = await fetch(DECK_URL);
    const deckData = await deckResponse.json();

    const firstThrowResponse = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=2`
    );
    const firstThrowData = await firstThrowResponse.json();
    navigate('/game', {
      state: { player1, player2, deckData, firstThrowData },
    });
  };

  return (
    <>
      <AppNavbar />
      <br />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Player 1</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='John Doe'
                  value={player1}
                  onChange={handlePlayer1Change}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Player 2</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Jane Doe'
                  value={player2}
                  onChange={handlePlayer2Change}
                />
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
