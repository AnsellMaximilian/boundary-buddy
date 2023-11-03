import { useGame } from "../context/GameContext";
import { levels } from "../lib/game-values";
import { useEffect, useState } from "react";

export default function Explanation({ explanation }: { explanation: string }) {
  const {
    nextQuestion,
    currentChoice,
    currentQuestion,
    currentLevel,
    setExplainMode,
    setCurrentChoice,
    setGameWin,
  } = useGame();

  const [isCorrect, setIsCorrect] = useState(false);

  const isChoiceCorrect =
    currentChoice !== null &&
    levels[currentLevel].questions[currentQuestion].choices[currentChoice]
      .isCorrect;

  useEffect(() => {
    if (isChoiceCorrect) {
      setIsCorrect(true);
    }
  }, [isChoiceCorrect]);
  return (
    <div className="text-center">
      {/* <img src={fullLogo} /> */}
      <div className="mb-2 text-4xl font-bold tracking-tight text-white">
        {isChoiceCorrect ? "Correct!" : "Incorrect, but that's okay!"}
      </div>
      <div className="text-2xl md:text-5xl text-white tracking-tighter mb-8">
        {explanation}
      </div>
      {isChoiceCorrect || isCorrect ? (
        currentLevel + 1 === levels.length &&
        currentQuestion + 1 === levels[currentLevel].questions.length ? (
          <button
            className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold"
            onClick={() => {
              setGameWin(true);
              setCurrentChoice(null);
            }}
          >
            Finish Game!
          </button>
        ) : (
          <button
            className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-950 font-bold"
            onClick={() => {
              nextQuestion();
              setCurrentChoice(null);
            }}
          >
            Next Question
          </button>
        )
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
