import { useEffect, useState } from "react";

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import GameItem from "./GameItem";
import FinishScreen from "./FinishScreen";

function winConditions(userRoll: IconType, pcRoll: IconType) {
  if (userRoll === pcRoll) {
    return "draw";
  }
  if (
    (userRoll === "rock" && pcRoll === "scissors") ||
    (userRoll === "scissors" && pcRoll === "paper") ||
    (userRoll === "paper" && pcRoll === "rock")
  ) {
    return "userWin";
  }
  return "pcWin";
}

type IconType = "rock" | "paper" | "scissors" | null;
export default function RockPaperScissors() {
  const [rolled, setRolled] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconType>(null);
  const [computerSelect, setComputerSelect] = useState<IconType>(null);

  function handleRoll(icon: IconType) {
    setRolled(true);
    setSelectedIcon(icon);
  }

  useEffect(
    function () {
      if (!rolled) return;
      const timer = setTimeout(() => {
        const computerRoll = Math.floor(Math.random() * 3);

        if (computerRoll === 0) {
          setComputerSelect("rock");
        }
        if (computerRoll === 1) {
          setComputerSelect("scissors");
        }
        if (computerRoll === 2) {
          setComputerSelect("paper");
        }
        setRolled(false);
      }, 2500);

      return () => clearTimeout(timer);
    },
    [rolled],
  );
  const whoWin =
    selectedIcon !== null && computerSelect !== null
      ? winConditions(selectedIcon, computerSelect)
      : "";

  function handleReset() {
    setRolled(false);
    setSelectedIcon(null);
    setComputerSelect(null);
  }

  const player =
    selectedIcon === "rock" ? (
      <FaHandRock />
    ) : selectedIcon === "paper" ? (
      <FaHandPaper />
    ) : (
      <FaHandScissors />
    );

  const pc =
    computerSelect === "rock" ? (
      <FaHandRock />
    ) : computerSelect === "paper" ? (
      <FaHandPaper />
    ) : (
      <FaHandScissors />
    );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-700 via-slate-500 to-slate-600 pt-20">
      {whoWin !== "" && (
        <FinishScreen
          onReset={handleReset}
          pc={pc}
          player={player}
          whoWin={whoWin}
        />
      )}
      <h1 className="mb-16 flex  items-center justify-center gap-1 text-center text-xl text-slate-50 md:mb-24 md:text-4xl">
        <span className="flex items-center justify-center gap-1">
          Rock
          <FaHandRock />
        </span>
        <span className=" px-2">/</span>
        <span className="flex items-center justify-center gap-1">
          Paper
          <FaHandPaper />
        </span>
        <span className=" px-2">/</span>
        <span className="flex items-center justify-center gap-1">
          Scissors
          <FaHandScissors />
        </span>
      </h1>
      <ul
        className={`mx-auto flex w-full max-w-[40rem] flex-wrap items-center justify-center gap-8 ${
          rolled ? "animate-bounce" : ""
        }`}
      >
        <GameItem
          onClick={() => handleRoll("rock")}
          isSelected={selectedIcon === "rock"}
        >
          <FaHandRock />
        </GameItem>
        <GameItem
          onClick={() => handleRoll("scissors")}
          isSelected={selectedIcon === "scissors"}
        >
          <FaHandScissors />
        </GameItem>
        <GameItem
          onClick={() => handleRoll("paper")}
          isSelected={selectedIcon === "paper"}
        >
          <FaHandPaper />
        </GameItem>
      </ul>
    </div>
  );
}
