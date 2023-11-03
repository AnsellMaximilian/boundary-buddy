import Typewriter from "typewriter-effect";
import buddyForward from "../assets/buddy-forward.svg";
import { useGame } from "../context/GameContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GameIntro() {
  const { setGameOn } = useGame();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setShowButton(true), 10000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="grow flex flex-col items-center justify-center p-4 w-full">
      <h1 className="text-4xl font-bold text-center text-white">
        Hello, Cool Kid!
      </h1>
      <div className="text-center animate-bounce mt-16">
        <img src={buddyForward} />
      </div>
      <div className="md:max-w-5xl md:mx-auto text-lg md:text-2xl w-full text-center  tracking-tighter p-4 border-4 rounded-lg shadow-md border-purple-600 bg-purple-300">
        <Typewriter
          options={{
            cursor: "",
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hey there, kiddo! I'm your pal, Boundary Buddy, and I'm here to drop some knowledge on you. You know what's really cool? It's being true to yourself, speaking up for your personal space, and showing respect for others. That's right, setting your boundaries is not just okay; it's super cool! So, are you ready to join the cool crew and learn how to rock those boundaries while spreading respect like confetti? Let's dive in and make it cooler than ever!"
              )
              .start();
          }}
        />
      </div>
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-purple-900 text-white px-6 py-4 rounded-md hover:bg-purple-950 font-bold mt-6 text-3xl"
          onClick={() => {
            setGameOn(true);
          }}
        >
          I'm ready to be cool!
        </motion.button>
      )}
    </div>
  );
}
