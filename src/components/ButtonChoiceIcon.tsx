import { Button, ButtonProps, Image } from "@chakra-ui/react"
import rockIcon from "../../assets/icon-rock.svg";
import scissorIcon from "../../assets/icon-scissors.svg";
import paperIcon from "../../assets/icon-paper.svg";


interface Props extends ButtonProps {
  typeChoice?: 'rock' | 'scissor' | 'paper' 
  onClick?: () => void
}

function ButtonChoiceIcon({
  typeChoice,
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
      w={["130px", "130px", "200px"]}
      h={["130px", "130px", "200px"]}
      borderRadius={9999}
      border="16px"
      borderColor={typeChoice || "brand.red"}
      borderStyle="solid"
      onClick={onClick}
      {...props}
    >
      {typeChoice &&
        <Image
          w="70%"
          h="60%" 
          src={icon[typeChoice]}
          alt=""
        />}
    </Button>
  )
}

export default ButtonChoiceIcon
