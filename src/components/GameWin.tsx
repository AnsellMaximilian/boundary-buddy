import Typewriter from "typewriter-effect";
import buddyForward from "../assets/buddy-forward.svg";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GameWin() {
  const { width, height } = useWindowSize();
  const [launchConfetti, setLaunchConfetti] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setLaunchConfetti(false), 10000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="grow flex flex-col items-center justify-center p-4 w-full">
      <h1 className="text-4xl font-bold text-center text-white">
        Congrats, Cool Kid!
      </h1>
      <div className="text-center animate-bounce mt-16">
        <img src={buddyForward} />
      </div>
      <div
        className="text-lg md:text-2xl w-full text-center  tracking-tighter p-4 border-4 rounded-lg shadow-md border-purple-600 bg-purple-300"
        // className="text-2xl w-full text-center text-white font-medium tracking-tighter p-4 border-4 rounded-lg shadow-md border-purple-600 bg-purple-300"
      >
        <Typewriter
          options={{ cursor: "", delay: 50 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Congratulations, you did it! You're officially part of the Cool Crew now! You've learned how to stand up for your personal boundaries, and you've shown that respecting others' boundaries is the coolest thing ever. Keep being your awesome self and remember, in the Cool Crew, we're all about spreading respect and setting our boundaries like pros. Way to go, Cool Crew member!"
              )
              //   .callFunction(() => {
              //     console.log("String typed out!");
              //   })
              //   .callFunction(() => {
              //     console.log("All strings were deleted");
              //   })
              .start();
          }}
        />
      </div>
      <AnimatePresence>
        {launchConfetti && (
          <motion.div exit={{ opacity: 0 }}>
            <Confetti width={width} height={height} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
