import { Flex, ListItem, Text, Tooltip, UnorderedList } from "@chakra-ui/react";
import { ReactElement, useContext, useMemo } from "react";
import Context from "../context/Context";

export default function TableDetails(): ReactElement {
  const { tableData } = useContext(Context);
  const totalWeight = useMemo(
    () =>
      tableData?.reduce(
        (acc, el) => acc + (el?.weigth === undefined ? 0 : el.weigth),
        0
      ),
    [tableData]
  );
  return (
    <UnorderedList width={"full"}>
      <Flex justifyContent={"space-evenly"}>
        <ListItem>Total de Clientes: {tableData?.length}</ListItem>
        <ListItem>Peso Total: {totalWeight}</ListItem>
        <ListItem>
          <Tooltip label="Peso Total/Total de Clientes">
            <Text as="u">
              Ticket Médio*:{" "}
              {(
                (totalWeight === undefined ? 0 : totalWeight) /
                (tableData?.length !== undefined ? tableData?.length : 1)
              ).toFixed(2)}
            </Text>
          </Tooltip>
        </ListItem>
      </Flex>
    </UnorderedList>
  );
}
