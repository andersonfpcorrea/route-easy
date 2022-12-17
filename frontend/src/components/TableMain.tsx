import { ReactElement } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function TableMain(): ReactElement {
  return (
    <TableContainer width={"full"}>
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
        <Tbody>
          <Tr>
            <Td>Eduardo</Td>
            <Td>R. Ática</Td>
            <Td>São Paulo</Td>
            <Td>Brasil</Td>
            <Td isNumeric>120</Td>
            <Td isNumeric>-23.541</Td>
            <Td isNumeric>-46.584</Td>
            <Td>
              <Flex justifyContent={"space-around"}>
                <Button>
                  <Icon as={EditIcon} />
                </Button>
                <Button>
                  <Icon as={DeleteIcon} />
                </Button>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
