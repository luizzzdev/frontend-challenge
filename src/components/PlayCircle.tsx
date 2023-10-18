import { Circle, CircularProgress } from "@chakra-ui/react";
import Image from "next/image";

export default function PlayCircle({
  borderColor,
  signal,
  onClick,
  playing,
}: {
  borderColor: String;
  signal: String;
  onClick: (signal: String) => {};
  playing: boolean;
}) {
  return (
    <Circle
      bg="#ECF0F1"
      size={130}
      border={`16px solid ${borderColor}`}
      onClick={playing ? () => onClick(signal) : () => {}}
      cursor={playing ? "pointer" : "default"}
    >
      {signal !== "" ? (
        <Image
          src={`/${signal}.svg`}
          width={"50"}
          height={58}
          alt="Picture of the author"
        />
      ) : (
        <CircularProgress isIndeterminate color="red" />
      )}
    </Circle>
  );
}
