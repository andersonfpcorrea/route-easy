import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "./context/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
