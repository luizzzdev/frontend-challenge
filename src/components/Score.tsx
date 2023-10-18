import { Box, VStack, Text } from "@chakra-ui/react";

export default function Score({ score }: { score: number }) {
  return (
    <Box
      padding={8}
      bg={"#ECF0F1"}
      borderRadius={8}
      border={"2px solid"}
      borderColor={"#BDC3C7"}
    >
      <VStack spacing={0} align="center" color={"#2C3E50"}>
        <Text fontSize={26} fontWeight={700}>
          SCORE
        </Text>
        <Text fontSize={36} fontWeight={700}>
          {score}
        </Text>
      </VStack>
    </Box>
  );
}
