import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);
