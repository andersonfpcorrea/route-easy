import { ReactElement } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import useTable from "../hooks/useTable";

export default function TableMain(): ReactElement {
  const { tableRows } = useTable();

  return (
    <TableContainer width={"full"} overflowY={"auto"}>
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
            <Th>Editar/Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>{tableRows}</Tbody>
      </Table>
    </TableContainer>
  );
}
