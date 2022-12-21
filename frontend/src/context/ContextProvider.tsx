import React, { ReactElement } from "react";
import Context from "./Context";
import useDeliveries from "../hooks/useDeliveries";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const {
    tableData,
    errorDeliveries,
    isLoadingDeliveries,
    setUpdateTable,
    coords,
    setCoords,
  } = useDeliveries();

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
