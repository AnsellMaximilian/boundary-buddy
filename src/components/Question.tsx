import { useGame } from "../context/GameContext";
import { levels } from "../lib/game-values";
import { Question as IQuestion } from "../lib/types";
import Choice from "./Choice";
import { useState } from "react";
import Explanation from "./Explanation";
import { AnimatePresence, Variants, motion } from "framer-motion";
import CoolMeter from "./CoolMeter";

const animationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    y: "-100vh",
  },
};

export default function Question({
  question,
  index,
}: {
  question: IQuestion;
  index: number;
}) {
  const { explainMode, setExplainMode, currentChoice, setCurrentChoice } =
    useGame();
  const [explanation, setExplanation] = useState("");

  const handleChoose = (index: number) => {
    setCurrentChoice(index);
    setExplanation(question.choices[index].explanation);
    setTimeout(() => {
      // Set explanation mode
      setExplainMode(true);
    }, 1000);
  };

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {explainMode ? (
          <motion.div
            key="explanation"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Explanation explanation={explanation} />
          </motion.div>
        ) : (
          <motion.div
            key="question"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:max-w-5xl"
          >
            <div className="text-center text-white text-xl font-semibold">
              <div>Question #{index + 1}</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 md:mb-16">
                {question.questionText}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {question.choices.map((choice, index) => (
                <Choice
                  key={choice.choiceText + index}
                  choice={choice}
                  lockChoice={currentChoice !== null}
                  isChosen={currentChoice === index}
                  handleChoose={() => handleChoose(index)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
