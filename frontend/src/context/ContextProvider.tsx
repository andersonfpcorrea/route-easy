import React, { ReactElement, useState } from "react";
import Context from "./Context";
import { LatLngTuple } from "leaflet";
import { IDelivery, IDeliveryTable } from "../interfaces";
import useTable from "../hooks/useTable";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [defaultCoords] = useState<LatLngTuple>([-22.907, -43.173]);
  const [coords, setCoords] = useState<LatLngTuple | null>(null);
  const [delivery, setDelivery] = useState<IDelivery | null>(null);
  const [tableData, setTableData] = useState<IDeliveryTable[] | null>(null);

  // Load/update data to be rendered into the main table (delivery table)
  const tableRows = useTable();

  const store = {
    defaultCoords,
    coords,
    setCoords,
    delivery,
    setDelivery,
    tableData,
    setTableData,
    tableRows,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

// ! Implementar hook para carregar dados do db ao iniciar o app
