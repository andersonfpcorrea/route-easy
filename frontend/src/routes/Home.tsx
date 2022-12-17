import { ReactElement } from "react";
import FormMain from "../components/FormMain";
import MapArea from "../components/MapArea";
import TableMain from "../components/TableMain";
import TableDetails from "../components/TableDetails";
import { HStack, VStack } from "@chakra-ui/react";

export default function Home(): ReactElement {
  return (
    <HStack>
      <FormMain />
      <VStack>
        <MapArea />
        <TableMain />
        <TableDetails />
      </VStack>
    </HStack>
  );
}
