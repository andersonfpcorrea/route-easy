import React, { ReactElement, useState } from "react";
import Context from "./Context";
import { LatLngTuple } from "leaflet";
import { IDelivery } from "../interfaces";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [defaultCoords] = useState<LatLngTuple>([-22.907, -43.173]);
  const [coords, setCoords] = useState<LatLngTuple | null>(null);
  const [delivery, setDelivery] = useState<IDelivery | null>(null);

  const store = { defaultCoords, coords, setCoords, delivery, setDelivery };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}