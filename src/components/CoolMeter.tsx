import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { levels } from "../lib/game-values";
const totalQuestions = levels.reduce(
  (sum, level) => sum + level.questions.length,
  0
);

export default function CoolMeter() {
  const { currentLevel, currentQuestion, currentChoice } = useGame();
  const currentOverallQuestion = levels.reduce((sum, level, index) => {
    console.log({ index, currentLevel, currentQuestion });
    if (currentLevel >= index) {
      return (
        sum +
        level.questions.reduce((sum, _, questionIndex) => {
          if (currentQuestion > questionIndex) {
            return sum + 1;
          } else if (
            currentChoice &&
            levels[currentLevel].questions[currentQuestion].choices[
              currentChoice
            ].isCorrect
          ) {
            return sum + 1;
          } else {
            return sum;
          }
        }, 0)
      );
    } else {
      return sum;
    }
  }, 0);

  return (
    <div className="absolute bottom-4 p-2 bg-gray-400 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400 w-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: `${(currentOverallQuestion / totalQuestions) * 100}%`,
        }}
        transition={{ delay: 0.35 }}
        className="absolute inset-y-0 left-0 shadow-lg bg-green-400 bg-gradient-to-b from-pink-700 via-pink-400 to-pink-700 h-full w-full flex flex-col justify-center px-4"
      ></motion.div>
      <div className="relative text-white text-lg font-semibold">
        Cool Meter
      </div>
    </div>
  );
}
