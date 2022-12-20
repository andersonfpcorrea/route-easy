import React, { ReactElement, useState } from "react";
import Context from "./Context";
import useDeliveries from "../hooks/useDeliveries";
import { ICoords } from "../interfaces";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [coords, setCoords] = useState<ICoords[] | null>(null);

  const { tableData, errorDeliveries, isLoadingDeliveries, setUpdateTable } =
    useDeliveries();

  const store = {
    coords,
    setCoords,
    tableData,
    errorDeliveries,
    isLoadingDeliveries,
    setUpdateTable,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}
