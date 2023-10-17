import { Center, Flex, Text } from '@chakra-ui/react'
import ButtonChoiceIcon from './ButtonChoiceIcon'
import { ChoiceType } from '../contexts/JokenpoContext';

interface Props {
  isLoading: boolean;
  handleButton: (type: ChoiceType) => void;
  playerChoice: ChoiceType
}

function Jokenpo({handleButton, isLoading, playerChoice}: Props) {
  return (
<>
      {!isLoading ? (
        <Flex
          align={"center"}
          mt={36}
          w="full"
          wrap="wrap"
          position="relative">

          <Center w="50%">
            <ButtonChoiceIcon typeChoice='rock' onClick={() => handleButton('rock')} />
          </Center>

          <Center w="50%">
            <ButtonChoiceIcon typeChoice='paper' onClick={() => handleButton('paper')} />
          </Center>

          <Center w="100%">
            <ButtonChoiceIcon typeChoice='scissor' onClick={() => handleButton('scissor')} />
          </Center>

        </Flex>
      ) : (
        <Flex
          align={"center"}
          mt={36}
          w="full"
          wrap="wrap"
          position="relative">

          <Center w="50%">
            <ButtonChoiceIcon typeChoice={playerChoice} />
          </Center>
          <Center w="50%">
            <ButtonChoiceIcon typeChoice='' />
          </Center>
          <Center mt={8} w="100%">
            <Text fontSize={'md'}>MACHINE IS CHOOSING...</Text>
          </Center>

        </Flex>
      )}
    </>
  )
}

export default Jokenpo
