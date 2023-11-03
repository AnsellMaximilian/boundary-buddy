import fullLogo from "./assets/full-logo.svg";
import "./App.css";
import { levels } from "./lib/game-values";
import Game from "./components/Game";
import { useGame } from "./context/GameContext";
import GameWin from "./components/GameWin";
import { useState } from "react";
import GameIntro from "./components/GameIntro";

function App() {
  const { gameOn, gameWin } = useGame();

  return (
    <main className="h-screen bg-purple-400 bg-graddient-to-r from-purple-600 via-pink-300 to-purple-600 flex flex-col items-center justify-center">
      {gameWin ? (
        <GameWin />
      ) : gameOn ? (
        <Game levels={levels} />
      ) : (
        <GameIntro />
      )}
    </main>
  );
}

export default App;
