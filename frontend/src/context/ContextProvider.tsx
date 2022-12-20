import React, { ReactElement, useState } from "react";
import Context from "./Context";
import { LatLngTuple } from "leaflet";
import useDeliveries from "../hooks/useDeliveries";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [coords, setCoords] = useState<LatLngTuple | null>(null);

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
