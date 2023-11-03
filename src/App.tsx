import fullLogo from "./assets/full-logo.svg";
import "./App.css";
import { levels } from "./lib/game-values";
import Game from "./components/Game";
import { useGame } from "./context/GameContext";
import GameWin from "./components/GameWin";

function App() {
  const { gameOn, setGameOn, gameWin } = useGame();

  return (
    <main className="h-screen bg-purple-400 bg-graddient-to-r from-purple-600 via-pink-300 to-purple-600 flex flex-col items-center justify-center">
      {gameWin ? (
        <GameWin />
      ) : gameOn ? (
        <Game levels={levels} />
      ) : (
        <div className="text-center">
          <img src={fullLogo} />
          <div className="mt-4">
            <button
              className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold"
              onClick={() => setGameOn(true)}
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
