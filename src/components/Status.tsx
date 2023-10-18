import { Text, Center, VStack } from "@chakra-ui/react";
import React from "react";

export default function Status({
  result,
  machineSelection,
  handlePlayAgain,
}: {
  result: String;
  machineSelection: String;
  handlePlayAgain: VoidFunction;
}) {
  return (
    <>
      <Center>
        <VStack>
          {result === "MACHINE_TURN" && (
            <Text
              color={"#fff"}
              fontSize={26}
              fontWeight={700}
              textAlign={"center"}
            >
              MACHINE IS CHOOSING...
            </Text>
          )}

          {machineSelection !== "" && (
            <Text
              color={"#fff"}
              fontSize={26}
              fontWeight={700}
              textAlign={"center"}
            >
              MACHINE SELECTED {machineSelection}
            </Text>
          )}

          {(result === "WON" || result === "LOOSE" || result === "DRAW") && (
            <VStack>
              {result === "DRAW" ? (
                <Text color={"#fff"} fontSize={36} fontWeight={700}>
                  IT'S A {result}!
                </Text>
              ) : (
                <Text color={"#fff"} fontSize={36} fontWeight={700}>
                  YOU {result}!
                </Text>
              )}

              <button
                style={{
                  borderRadius: "8px",
                  background: "#2980B9",
                  padding: "8px 16px",
                  color: "#fff",
                  border: 0,
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={() => handlePlayAgain()}
              >
                PLAY AGAIN
              </button>
            </VStack>
          )}
        </VStack>
      </Center>
    </>
  );
}
