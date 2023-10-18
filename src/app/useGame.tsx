import { useState } from "react";

export default function useGame() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<
    "PLAYNG" | "WON" | "LOOSE" | "MACHINE_TURN" | "DRAW"
  >("PLAYNG");

  const [machineSelection, setMachineSelection] = useState<
    "PAPER" | "SCISSORS" | "ROCK" | ""
  >("");

  const [playerSelection, setPlayerSelection] = useState<
    "rock" | "paper" | "scissors" | ""
  >("");

  const handleOneOption = (signal: "rock" | "paper" | "scissors" | "") => {
    const optionsToMachine = ["ROCK", "PAPER", "SCISSORS"];
    const machinePlay: any = optionsToMachine[Math.floor(Math.random() * 3)];

    setResult("MACHINE_TURN");
    setPlayerSelection(signal);
    setTimeout(() => {
      setMachineSelection(machinePlay);

      if (signal.toUpperCase() === machinePlay) {
        setResult("DRAW");
      } else {
        if (
          (signal === "paper" && machinePlay === "ROCK") ||
          (signal === "rock" && machinePlay === "SCISSORS") ||
          (signal === "scissors" && machinePlay === "PAPER")
        ) {
          setResult("WON");
          const newScore = score + 1;
          setScore(newScore);
        } else {
          setResult("LOOSE");
          const newScore = score - 1;
          setScore(newScore);
        }
      }
    }, 2000);
  };

  const handlePlayAgain = () => {
    setResult("PLAYNG");
    setMachineSelection("");
    setPlayerSelection("");
  };

  return {
    score,
    result,
    handleOneOption,
    machineSelection,
    playerSelection,
    handlePlayAgain,
  };
}
