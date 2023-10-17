import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import HeaderScoreBoard from './components/HeaderScoreBoard'
import Jokenpo from './components/Jokenpo'
import { ChoiceType } from './contexts/JokenpoContext'
import { useJokenpo } from './hooks/useJokenpo'
import { ResultDisplay } from './components/ResultDisplay'

function App() {
  const [isLoading, setisLoading] = useState(false);

  const { player1Choice, player2Choice, resultJokenpo, start, score, resetJokenpo } = useJokenpo();

  function handleButton(choice: ChoiceType) {
    setisLoading(true);
    start(choice);
  }

  function handleMainButton() {
    resetJokenpo()
    setisLoading(false)
  }

  return (
    <Flex
      align={"center"}
      direction={"column"}
      p={4}
      w="full"
      position="relative"
    >
      <HeaderScoreBoard score={score} />
      {!player2Choice ?
        (
          <Jokenpo
            handleButton={handleButton}
            playerChoice={player1Choice}
            isLoading={isLoading} />
        ) : (
          <>
            <ResultDisplay
              player1Choice={player1Choice}
              player2Choice={player2Choice}
              result={resultJokenpo} />
            <Button
              bg="brand.button"
              color="brand.gray"
              fontSize={"sm"}
              textTransform="uppercase"
              mt="6"
              height={"40px"}
              width={"246px"}
              transition="0.2s"
              onClick={handleMainButton}
            >
              Play Again
            </Button>
          </>
        )}
    </Flex>
  )
}

export default App
