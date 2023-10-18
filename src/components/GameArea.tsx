import { Flex, Center, Spacer } from "@chakra-ui/react";
import PlayCircle from "./PlayCircle";

export default function GameArea({
  handleOneOption,
  result,
  playerSelection,
  machineSelection,
}: {
  handleOneOption: any;
  result: string;
  playerSelection: string;
  machineSelection: string;
}) {
  return (
    <>
      {result === "PLAYNG" && (
        <>
          <Flex mt={110}>
            <PlayCircle
              playing={result === "PLAYNG"}
              borderColor={"#27AE60"}
              signal={"rock"}
              onClick={handleOneOption}
            />
            <Spacer />
            <PlayCircle
              playing={result === "PLAYNG"}
              borderColor={"#F1C40F"}
              signal={"paper"}
              onClick={handleOneOption}
            />
          </Flex>
          <Center>
            <PlayCircle
              playing={result === "PLAYNG"}
              borderColor={"#2980B9"}
              signal={"scissors"}
              onClick={handleOneOption}
            />
          </Center>
        </>
      )}

      {result === "MACHINE_TURN" && (
        <Flex mt={110}>
          <PlayCircle
            playing={false}
            borderColor={"#27AE60"}
            signal={playerSelection}
            onClick={handleOneOption}
          />
          <Spacer />
          <PlayCircle
            playing={false}
            borderColor={"#E74C3C"}
            signal={""}
            onClick={handleOneOption}
          />
        </Flex>
      )}

      {(result === "WON" || result === "LOOSE" || result === "DRAW") && (
        <Flex mt={110}>
          <PlayCircle
            playing={false}
            borderColor={"#27AE60"}
            signal={playerSelection}
            onClick={handleOneOption}
          />
          <Spacer />
          <PlayCircle
            playing={false}
            borderColor={"#F1C40F"}
            signal={machineSelection.toLowerCase()}
            onClick={handleOneOption}
          />
        </Flex>
      )}
    </>
  );
}
