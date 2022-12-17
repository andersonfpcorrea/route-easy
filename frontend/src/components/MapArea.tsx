import { ReactElement } from "react";
import useMap from "../hooks/useMap";

export default function MapArea(): ReactElement {
  useMap("grey");

  return <div id="map" className="h-80 w-full"></div>;
}
