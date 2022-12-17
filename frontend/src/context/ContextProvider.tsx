import React, { ReactElement, useState } from "react";
import Context from "./Context";

export default function ContextProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [coords, setCoords] = useState([-22.907, -43.173]);

  const store = { coords, setCoords };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}
