import { ReactElement } from "react";
import FormMain from "../components/FormMain";
import MapArea from "../components/MapArea";
import TableMain from "../components/TableMain";
import TableDetails from "../components/TableDetails";
import { Flex, VStack } from "@chakra-ui/react";

export default function Home(): ReactElement {
  return (
    <Flex className="h-screen" paddingX={4} paddingY={10}>
      <FormMain />
      <VStack width="full" height="full" paddingX={4} gap={12}>
        <MapArea />
        <Flex direction={"column"} gap={4} width={"full"} maxHeight={"96"}>
          <TableMain />
          <TableDetails />
        </Flex>
      </VStack>
    </Flex>
  );
}
