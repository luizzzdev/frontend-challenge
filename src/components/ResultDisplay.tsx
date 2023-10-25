import { Center, Flex, Text } from "@chakra-ui/react"
import ButtonChoiceIcon from "./ButtonChoiceIcon"
import { ChoiceType } from "../contexts/JokenpoContext"
import { isMobile } from "../utils/isMobile"

interface Props {
  result: "win" | "lose" | "tied"
  player1Choice: ChoiceType
  player2Choice: ChoiceType
}

export function ResultDisplay({ player1Choice, player2Choice, result }: Props) {

  return (
    <Flex
      align={"center"}
      mt={36}
      w="full"
      wrap="wrap"
      position="relative">
      <Center w="50%">
        <ButtonChoiceIcon typeChoice={player1Choice} />
      </Center>

      <Center w="50%">
        <ButtonChoiceIcon typeChoice={player2Choice} />
      </Center>

      {isMobile() &&
        <Text
          color="brand.gray"
          textTransform="uppercase"
          textAlign="center"
          fontSize="md"
          mt="9"
          w="full"
        >
          {`MACHINE SELECTED ${player2Choice}`}
        </Text>}

      <Text
        color="brand.gray"
        textTransform="uppercase"
        textAlign="center"
        fontSize="xl"
        mt="9"
        w="full"
      >
        {`You ${result}`}
      </Text>
    </Flex>
  )
}
