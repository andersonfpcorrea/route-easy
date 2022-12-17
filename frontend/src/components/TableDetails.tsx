import { ListItem, Text, Tooltip, UnorderedList } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function TableDetails(): ReactElement {
  return (
    <UnorderedList>
      <ListItem>Total de Clientes: {1}</ListItem>
      <ListItem>Peso Total: {120}</ListItem>
      <ListItem>
        <Tooltip label="Peso Total/Total de Clientes">
          <Text as="u">Ticket Médio*: {120}</Text>
        </Tooltip>
      </ListItem>
    </UnorderedList>
  );
}
