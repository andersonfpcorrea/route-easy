import { ReactElement } from "react";
import useMap from "../hooks/useMap";
import { Box } from "@chakra-ui/react";

export default function MapArea(): ReactElement {
  useMap("dark");

  return <Box id="map" width={"full"} className="h-3/5"></Box>;
}
