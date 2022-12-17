import { ReactElement } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
