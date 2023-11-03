import React, { createContext, ReactNode, useContext, useState } from "react";
import { Level } from "../lib/types";
import { levels } from "../lib/game-values";

export interface GameContextData {
  levels: Level[];
  setCurrentQuestion: (index: number) => void;
  currentLevel: number;
  setCurrentLevel: (index: number) => void;
  currentQuestion: number;
  gameOn: boolean;
  setGameOn: (value: boolean) => void;
  explainMode: boolean;
  setExplainMode: (value: boolean) => void;
  nextQuestion: () => void;
  currentChoice: number | null;
  setCurrentChoice: (index: number | null) => void;
}

export const GameContext = createContext<GameContextData>({
  levels: levels,
  currentLevel: 0,
  setCurrentLevel: () => {},
  setCurrentQuestion: () => {},
  nextQuestion: () => {},
  setGameOn: () => {},
  gameOn: false,
  currentQuestion: 0,
  setExplainMode: () => {},
  explainMode: false,
  currentChoice: 0,
  setCurrentChoice: () => {},
});

export const GameContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentChoice, setCurrentChoice] = useState<number | null>(null);
  const [gameOn, setGameOn] = useState(false);
  const [explainMode, setExplainMode] = useState(false);

  const nextQuestion = () => {
    setExplainMode(false);
    if (currentQuestion + 1 >= levels[currentLevel].questions.length) {
      setCurrentLevel((prev) => prev + 1);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentChoice,
        setCurrentChoice,
        explainMode,
        setExplainMode,
        nextQuestion,
        setCurrentQuestion,
        currentQuestion,
        currentLevel,
        setCurrentLevel,
        levels,
        gameOn,
        setGameOn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextData => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a UserContextProvider");
  }
  return context;
};
