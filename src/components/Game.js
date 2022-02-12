import { Button, Col, Container, Row } from 'react-bootstrap';
import AppNavbar from './AppNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Image from './Image';

function Game() {
  const {
    state: { deckData, firstThrowData, player1, player2 },
  } = useLocation();
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const [player1Cards, setPlayer1Cards] = useState([firstThrowData.cards[0]]);
  const [player2Cards, setPlayer2Cards] = useState([firstThrowData.cards[1]]);

  const [winner1Cards, setWinner1Cards] = useState([]);
  const [winner2Cards, setWinner2Cards] = useState([]);

  const handlePlayButton = async () => {
    const throwResponse = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=2`
    );
    const throwData = await throwResponse.json();
    if (throwData.error) {
      setGameOver(true);
      alert(throwData.error);
      navigate('/');
      return;
    }

    if (!gameOver) {
      setPlayer1Cards([...player1Cards, throwData.cards[0]]);
      setPlayer2Cards([...player2Cards, throwData.cards[1]]);

      const player1ValueMatch = player1Cards.find(
        (card) => card.value === throwData.cards[0].value
      );
      const player2ValueMatch = player2Cards.find(
        (card) => card.value === throwData.cards[1].value
      );

      if (player1ValueMatch) {
        setGameOver(true);
        setWinner1Cards([player1ValueMatch, throwData.cards[0]]);
        console.log(player1ValueMatch);
        console.log('1 gano');
      }

      if (player2ValueMatch) {
        setGameOver(true);
        setWinner2Cards([player2ValueMatch, throwData.cards[1]]);
        console.log(player2ValueMatch);
        console.log('2 gano');
      }
    } else {
      alert('game over');
      navigate('/');
    }
  };

  return (
    <>
      <AppNavbar />
      <br />
      <Container>
        <Row>
          <Col>Player 1</Col>
          <Col>
            <Button
              variant='outline-success'
              type='button'
              onClick={handlePlayButton}
            >
              &#9658;
            </Button>
          </Col>
          <Col>Player 2</Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Row>
              {winner1Cards.map((card) => (
                <Col key={'id' + card.code}>
                  <Image
                    key={card.code}
                    src={card.image}
                    value={card.value}
                    suit={card.suit}
                  ></Image>
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Row>
              {winner2Cards.map((card) => (
                <Col key={'id' + card.code}>
                  <Image
                    key={card.code}
                    src={card.image}
                    value={card.value}
                    suit={card.suit}
                  ></Image>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Row>
              {player1Cards.map((card) => (
                <Col key={'id' + card.code}>
                  <Image
                    key={card.code}
                    src={card.image}
                    value={card.value}
                    suit={card.suit}
                  ></Image>
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <Row>
              {player2Cards.map((card) => (
                <Col key={'id' + card.code}>
                  <Image
                    key={card.code}
                    src={card.image}
                    value={card.value}
                    suit={card.suit}
                  ></Image>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Game;
