import React, { ReactElement, useState } from "react";
import Context from "./Context";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [defaultCoords] = useState([-22.907, -43.173]);
  const [coords, setCoords] = useState(defaultCoords);

  const store = { defaultCoords, coords, setCoords };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}
