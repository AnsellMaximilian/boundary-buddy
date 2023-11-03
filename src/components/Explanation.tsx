import { useGame } from "../context/GameContext";
import fullLogo from "../assets/full-logo.svg";
import { levels } from "../lib/game-values";

export default function Explanation({ explanation }: { explanation: string }) {
  const {
    nextQuestion,
    currentChoice,
    currentQuestion,
    currentLevel,
    setExplainMode,
    setCurrentChoice,
  } = useGame();

  const isChoiceCorrect =
    currentChoice !== null &&
    levels[currentLevel].questions[currentQuestion].choices[currentChoice]
      .isCorrect;
  return (
    <div className="text-center">
      {/* <img src={fullLogo} /> */}
      <div className="mb-2 text-4xl font-bold tracking-tight text-white">
        {isChoiceCorrect ? "Correct!" : "Incorrect, but that's okay!"}
      </div>
      <div className="text-5xl text-white tracking-tighter mb-8">
        {explanation}
      </div>
      {isChoiceCorrect ? (
        <button
          className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold"
          onClick={() => {
            nextQuestion();
            setTimeout(() => {
              setCurrentChoice(null);
            }, 1000);
          }}
        >
          Next Question
        </button>
      ) : (
        <button
          className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold"
          onClick={() => {
            setExplainMode(false);

            setCurrentChoice(null);
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
