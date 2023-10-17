import { Button, ButtonProps, Image } from "@chakra-ui/react"
import rockIcon from "../../assets/icon-rock.svg";
import scissorIcon from "../../assets/icon-scissors.svg";
import paperIcon from "../../assets/icon-paper.svg";


interface Props extends ButtonProps {
  typeChoice: 'rock' | 'scissor' | 'paper' | ''
  onClick?: () => void
}

function ButtonChoiceIcon({
  typeChoice = "",
  onClick,
  ...props
}: Props) {

  const icon = {
    rock: rockIcon,
    paper: paperIcon,
    scissor: scissorIcon
  };

  return (
    <Button
      bg="brand.gray"
      w={["32", "32", "40"]}
      h={["32", "32", "40"]}
      borderRadius={9999}
      border="16px"
      borderColor={typeChoice}
      borderStyle="solid"
      onClick={onClick}
      {...props}
    >
      {typeChoice !== "" && <Image src={icon[typeChoice]} alt="" />}
    </Button>
  )
}

export default ButtonChoiceIcon
