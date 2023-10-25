import { useContext } from "react";
import { JokenpoContext } from "../contexts/JokenpoContext";

export function useJokenpo() {

  const context = useContext(JokenpoContext);
  return context;
  
}