import { createContext } from "react";
import { IInitalState } from "../interfaces";

const Context = createContext<IInitalState>({
  defaultCoords: [-22.907, -43.173],
  coords: null,
  setCoords: function () {},
  delivery: null,
  setDelivery: function () {},
  tableData: null,
  setTableData: function () {},
});

export default Context;
