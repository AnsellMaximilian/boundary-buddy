import { Level as LevelType } from "../lib/types";
import { useGame } from "../context/GameContext";
import Question from "./Question";
import { levels } from "../lib/game-values";
import { Variants, motion } from "framer-motion";

type Props = {
  level: LevelType;
};

const gameVariants: Variants = {
  levelInitial: {
    y: "-50%",
    top: "50%",
  },
  levelEnd: { y: 0, top: 0 },
};

export default function Level({ level }: Props) {
  const { currentLevel, currentQuestion } = useGame();
  return (
    <div className="grow flex flex-col relative">
      <motion.div
        className="text-center relative"
        variants={gameVariants}
        initial="levelInitial"
        animate="levelEnd"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <Question
          question={levels[currentLevel].questions[currentQuestion]}
          index={currentQuestion}
        />
      </motion.div>
    </div>
  );
}
