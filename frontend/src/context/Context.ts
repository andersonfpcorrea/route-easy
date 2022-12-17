import { createContext } from "react";

interface IInitalState {
  coords?: number[];
  setCoords?: React.Dispatch<React.SetStateAction<number[]>>;
}

const Context = createContext<IInitalState>({});

export default Context;
