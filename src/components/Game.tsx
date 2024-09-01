import React, { useState } from "react";

type Choice = "rock" | "paper" | "scissors";

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const play = (choice: Choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (player: Choice, computer: Choice) => {
    if (player === computer) {
      setResult("It's a draw!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className="game-container">
      <div className="game">
        <h1>Rock, Paper, Scissors</h1>
        <div className="choices">
          {choices.map((choice) => (
            <button key={choice} onClick={() => play(choice)}>
              {choice}
            </button>
          ))}
        </div>
        {playerChoice && <p>Your choice: {playerChoice}</p>}
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Game;
