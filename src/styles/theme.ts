import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#2C3E50",
      title: "#34495E",
      gray: "#BDC3C7",
      button: "#2980B9",
      red: "#E74C3C"
    },
    rock: "#27AE60",
    scissor: "#2980B9",
    paper: "#F1C40F"
  },
  fontSizes: {
    sm: "18px",
    md: "26px",
    xl: "36px"
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
      fontWeight: "700",
        background: "brand.primary"
      }
    }
  }
}); 