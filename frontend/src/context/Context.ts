import { createContext } from "react";
import { IInitalState } from "../interfaces";

const Context = createContext<IInitalState>({
  coords: null,
  setCoords: function () {},
  tableData: null,
  setUpdateTable: function () {},
  isLoadingDeliveries: false,
});

export default Context;
