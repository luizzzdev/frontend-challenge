import { Flex, Heading, Text } from "@chakra-ui/react"

type Props = {
  score: number
}

function HeaderScoreBoard({ score }: Props) {

  return (
    <Flex
      bg={"brand.gray"}
      as="header"
      w="full"
      mt="2"
      color="brand.title"
      position="relative"
      borderRadius={8}
      align={"center"}
      direction={"column"}
    >
      <Heading fontSize={"md"}>
        SCORE
      </Heading>
      <Text fontSize={"xl"}>{score}</Text>
    </Flex>
  )
}

export default HeaderScoreBoard
