import { Choice as IChoice } from "../lib/types";

export default function Choice({
  choice,
  isChosen,
  handleChoose,
  lockChoice,
}: {
  choice: IChoice;
  isChosen: boolean;
  handleChoose: () => void;
  lockChoice: boolean;
}) {
  return (
    <button
      disabled={lockChoice}
      onClick={() => handleChoose()}
      className={`block w-full relative overflow-hidden rounded-md transition-all duration-200 text-white text-xl px-4 py-2 bg-yellow-400 font-semibold ring-offset-2 ${
        isChosen
          ? choice.isCorrect
            ? "ring-green-400 ring-4"
            : "ring-red-400 ring-4"
          : "hover:ring-white hover:ring"
      }`}
    >
      {choice.choiceText}
    </button>
  );
}
