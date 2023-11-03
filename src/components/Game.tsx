import Level from "./Level";
import { motion } from "framer-motion";

export default function Game() {
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
