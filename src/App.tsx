import React, { useState } from "react";

interface MemoryGame {
  cards: string[];
  flippedCards: number[];
  score: number;
  gameEnded: boolean;
}

const App: React.FC = () => {
  const [game, setGame] = useState<MemoryGame>({
    cards: [
      require("./assets/img1.jpg"),
      require("./assets/img6.jpg"),
      require("./assets/img2.jpg"),
      require("./assets/img7.jpg"),
      require("./assets/img3.jpg"),
      require("./assets/img9.jpg"),
      require("./assets/img2.jpg"),
      require("./assets/img4.jpg"),
      require("./assets/img8.jpg"),
      require("./assets/img5.jpg"),
      require("./assets/img5.jpg"),
      require("./assets/img6.jpg"),
      require("./assets/img7.jpg"),
      require("./assets/img1.jpg"),
      require("./assets/img4.jpg"),
      require("./assets/img8.jpg"),
      require("./assets/img9.jpg"),
      require("./assets/img3.jpg"),
    ],
    flippedCards: [],
    score: 0,
    gameEnded: false,
  });

  const flipCard = (index: number) => {
    if (game.flippedCards.length === 2 || game.flippedCards.includes(index)) {
      return;
    }

    const flippedCards = [...game.flippedCards, index];
    const cards = [...game.cards];

    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        const score = game.score + 1;
        const gameEnded = score === game.cards.length / 2;
        setGame({ ...game, flippedCards: [], score, gameEnded });
      } else {
        setTimeout(() => setGame({ ...game, flippedCards: [] }), 1000);
      }
    } else {
      setGame({ ...game, flippedCards });
    }
  };

  const restartGame = () => {
    setGame({
      cards: [
        require("./assets/img1.jpg"),
        require("./assets/img6.jpg"),
        require("./assets/img2.jpg"),
        require("./assets/img7.jpg"),
        require("./assets/img3.jpg"),
        require("./assets/img9.jpg"),
        require("./assets/img2.jpg"),
        require("./assets/img4.jpg"),
        require("./assets/img8.jpg"),
        require("./assets/img5.jpg"),
        require("./assets/img5.jpg"),
        require("./assets/img6.jpg"),
        require("./assets/img7.jpg"),
        require("./assets/img1.jpg"),
        require("./assets/img4.jpg"),
        require("./assets/img8.jpg"),
        require("./assets/img9.jpg"),
        require("./assets/img3.jpg"),
      ],
      flippedCards: [],
      score: 0,
      gameEnded: false,
    });
  };

  const { cards, flippedCards, score, gameEnded } = game;

  return (
    <div
      style={{
        width: "100%",
        height: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 100,
          backgroundColor: " #DB3026",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "cursive",
            fontSize: 20,
          }}
        >
          Jogo de Memória
        </p>
      </div>
      {gameEnded ? (
        <div>
          {score === game.cards.length / 2 ? (
            <div>
              <h2>Parabéns! Você conseguiu!</h2>
              <button onClick={() => alert("sim")}>Sim</button>
              <button onClick={() => alert("não")}>Não</button>
            </div>
          ) : (
            <div>
              <h2>Que pena, você não conseguiu!</h2>
              <button onClick={restartGame}>Tentar novamente</button>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            marginLeft: "20%",
          }}
        >
          <div>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "3px solid  #DB3026",
                  margin: "10px",
                  borderRadius: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: flippedCards.includes(index) ? "default" : "pointer",
                }}
                onClick={() => flipCard(index)}
              >
                {flippedCards.includes(index) ? (
                  <img
                    src={card}
                    alt={`Card ${index}`}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 2,
                    }}
                  />
                ) : (
                  <img
                    src={require("./assets/coração.png")}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <p
            style={{
              color: "black",
              fontFamily: "cursive",
              fontSize: 20,
              marginLeft: "20%",
            }}
          >
            Pontuação: {score}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
