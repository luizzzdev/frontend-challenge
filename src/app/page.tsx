"use client";
import { Container } from "@chakra-ui/react";
import Score from "@/components/Score";
import GameArea from "@/components/GameArea";
import Status from "@/components/Status";
import useGame from "./useGame";

export default function Home() {
  const {
    score,
    result,
    handleOneOption,
    machineSelection,
    playerSelection,
    handlePlayAgain,
  } = useGame();

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <Container maxW="820px" padding={32} flex={1}>
        <Score score={score} />
        <GameArea
          result={result}
          handleOneOption={handleOneOption}
          machineSelection={machineSelection}
          playerSelection={playerSelection}
        />
        <Status
          result={result}
          machineSelection={machineSelection}
          handlePlayAgain={handlePlayAgain}
        />
      </Container>
    </main>
  );
}
