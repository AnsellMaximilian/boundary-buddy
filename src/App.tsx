import "./App.css";
import Game from "./components/Game";
import { useGame } from "./context/GameContext";
import GameWin from "./components/GameWin";
import GameIntro from "./components/GameIntro";
import bg from "./assets/bg.svg";

function App() {
  const { gameOn, gameWin } = useGame();

  return (
    <main
      style={{ background: `url("${bg}")` }}
      className="bg-contain h-screen bg-purple-400 bg-graddient-to-r from-purple-600 via-pink-300 to-purple-600 flex flex-col items-center justify-center"
    >
      {gameWin ? <GameWin /> : gameOn ? <Game /> : <GameIntro />}
    </main>
  );
}

export default App;
