import { Level as LevelType } from "../lib/types";
import { useGame } from "../context/GameContext";
import Question from "./Question";
import { levels } from "../lib/game-values";
import { AnimatePresence, Variants, motion } from "framer-motion";
import CoolMeter from "./CoolMeter";

const containerVariants: Variants = {
  animate: {
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};

const gameVariants: Variants = {
  initial: {
    y: "-50%",
    top: "50%",
  },
  animate: { y: 0, top: 0 },
};

const questionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 2.2 },
  },
};

export default function Level() {
  const { currentLevel, currentQuestion } = useGame();
  return (
    <AnimatePresence mode="wait">
      {levels.map(
        (level, index) =>
          index === currentLevel && (
            <motion.div
              key={level.title + index + level.description}
              className="grow flex flex-col relative"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="text-center relative"
                variants={gameVariants}
                transition={{ delay: 2 }}
              >
                <h1 className="text-5xl font-bold tracking-tight text-white">
                  {level.title}
                </h1>
                <p className="font-medium text-3xl tracking-tighter text-white">
                  {level.description}
                </p>
              </motion.div>
              <motion.div
                className="grow flex flex-col items-center justify-center "
                variants={questionVariants}
              >
                <Question
                  question={levels[currentLevel].questions[currentQuestion]}
                  index={currentQuestion}
                />
                {/* <CoolMeter /> */}
              </motion.div>
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
}
