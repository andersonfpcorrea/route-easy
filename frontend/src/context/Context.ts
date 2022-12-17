import { createContext } from "react";

interface IInitalState {
  defaultCoords?: number[];
  coords: number[];
  setCoords: React.Dispatch<React.SetStateAction<number[]>>;
}

const Context = createContext<IInitalState>({
  coords: [-22.907, -43.173],
  setCoords: function () {},
});

export default Context;
