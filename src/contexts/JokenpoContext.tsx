import { createContext, ReactNode, useEffect, useState } from "react";

export type ChoiceType = "rock" | "paper" | "scissor" | "";
type ResultType = "win" | "lose" | "tied";

interface JokenpoContextType {
  score: number;
  player1Choice: ChoiceType;
  player2Choice: ChoiceType;
  start: (player1Choice: ChoiceType) => void;
  resultJokenpo: ResultType;
  resetScore: () => void;
  resetJokenpo: () => void;
}

interface JokenpoContextProviderProps {
  children: ReactNode;
}

export const JokenpoContext = createContext({} as JokenpoContextType);

export function JokenpoContextProvider({ children }: JokenpoContextProviderProps) {
  const [player1Choice, setPlayer1Choice] = useState<ChoiceType>("");
  const [player2Choice, setPlayer2Choice] = useState<ChoiceType>("");
  const [resultJokenpo, setResultJokenpo] = useState<ResultType>("lose");
  const [score, setScore] = useState(0);

  const choices: ChoiceType[] = ["rock", "paper", "scissor"];

  async function start(player1Choice: ChoiceType) {
    setPlayer1Choice(player1Choice);

    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    });

    const randomChoice = Math.floor(Math.random() * choices.length);
    setPlayer2Choice(choices[randomChoice]);

    generateResult(player1Choice, choices[randomChoice]);
  }

  function generateResult(
    firstChoice: ChoiceType,
    secondChoice: ChoiceType
  ) {

    if(firstChoice === secondChoice) {
      setResultJokenpo("tied")
      return
    }

    const ggChoices =
      (firstChoice === "paper" && secondChoice === "rock") ||
      (firstChoice === "rock" && secondChoice === "scissor") ||
      (firstChoice === "scissor" && secondChoice === "paper");

    switch (ggChoices) {
      case false:
        setResultJokenpo("lose");
        return;
      case true:
        setResultJokenpo("win");
        setScore((state) => state + 1);
        document.cookie = `score=${score + 1}`
        return
    }
  }

  function resetScore() {
    setScore(0);
    document.cookie = `score=0`
  }

  function resetJokenpo() {
    setPlayer2Choice("");
  }

  useEffect(() => {
    const cookie = document.cookie.split('=');
    if (cookie) {
      setScore(parseInt(cookie[1]));
    }
  }, []);

  return (
    <JokenpoContext.Provider
      value={{
        player1Choice,
        player2Choice,
        score,
        resultJokenpo,
        start,
        resetScore,
        resetJokenpo
      }}
    >
      {children}
    </JokenpoContext.Provider>
  );
}