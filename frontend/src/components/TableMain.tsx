import { ReactElement } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function TableMain(): ReactElement {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Rua</Th>
            <Th>Cidade</Th>
            <Th>País</Th>
            <Th isNumeric>Peso</Th>
            <Th isNumeric>Lat</Th>
            <Th isNumeric>Long</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Eduardo</Td>
            <Td>R. Ática</Td>
            <Td>São Paulo</Td>
            <Td>Brasil</Td>
            <Td isNumeric>120</Td>
            <Td isNumeric>-23.541</Td>
            <Td isNumeric>-46.584</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
