import { Level as LevelType } from "../lib/types";
import Level from "./Level";
import { useGame } from "../context/GameContext";
import { motion } from "framer-motion";

export default function Game({ levels }: { levels: LevelType[] }) {
  const { currentLevel } = useGame();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="grow flex flex-col p-4"
    >
      <Level />
    </motion.div>
  );
}
