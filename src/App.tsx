import React from "react";
import Game from "./components/Game";

const App: React.FC = () => {
  return (
    <div>
      <div className="rotate-message">
        Please rotate your device to play the game.
      </div>
      <Game />
    </div>
  );
};

export default App;
