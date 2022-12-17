import { ReactElement } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function FormMain(): ReactElement {
  return (
    <form className="flex flex-col gap-6">
      <FormControl
        isRequired
        border="1px"
        borderRadius="md"
        borderColor="WindowFrame"
        paddingY={8}
        paddingX={4}
        display="flex"
        flexDirection="column"
        gap={10}
      >
        <Flex direction={"column"} gap={6}>
          <Box>
            <FormLabel>Nome do cliente</FormLabel>
            <Input placeholder="John" />
          </Box>
          <Box>
            <FormLabel>Peso da entrega (kg)</FormLabel>
            <Input placeholder="0.300" />
          </Box>
          <Box>
            <FormLabel>Endereço de entrega</FormLabel>
            <Box position="relative">
              <Input
                placeholder="Avenida Presidente Vargas, 102"
                paddingRight="24"
              />
              <Button
                size="xs"
                colorScheme="yellow"
                textTransform={"uppercase"}
                position="absolute"
                right={4}
                top={2}
                zIndex="popover"
              >
                Buscar
              </Button>
            </Box>
          </Box>
        </Flex>

        <Flex gap={2}>
          <Input type={"text"} placeholder={"Latitude"} disabled />
          <Input type={"text"} placeholder={"Longitude"} disabled />
        </Flex>

        <Flex gap={4} direction="column">
          <Button colorScheme="green" width="full">
            Cadastrar Cliente
          </Button>
          <Button colorScheme="red" width="full">
            Resetar cadastro
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}
