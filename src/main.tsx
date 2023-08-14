import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gray: {
    50: "#f9f9f9",
    100: "#ededed",
    200: "#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500: "#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900: "#111",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: "Poppins",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
