import { ReactElement, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import useAddress from "../hooks/useAddress";

export default function FormMain(): ReactElement {
  const addressRef = useRef(null);

  const handleAddress = async (): Promise<void> => {
    const { value } = addressRef.current as unknown as HTMLInputElement;
    await useAddress(value); //!Check this
  };

  return (
    <form className="flex flex-col gap-6">
      <FormControl
        isRequired
        border="1px"
        borderColor={"ActiveBorder"}
        borderRadius="md"
        paddingY={8}
        paddingX={4}
        display="flex"
        flexDirection="column"
        gap={10}
      >
        <Flex direction={"column"} gap={6}>
          <FormControl isRequired>
            <FormLabel>Nome do cliente</FormLabel>
            <Input placeholder="John" />
          </FormControl>
          <Box>
            <FormLabel>Peso da entrega (kg)</FormLabel>
            <InputGroup>
              <Input placeholder="0.300" />
              <InputRightAddon>kg</InputRightAddon>
            </InputGroup>
          </Box>
          <Box>
            <FormLabel>Endereço de entrega</FormLabel>
            <Box position="relative">
              <Input
                placeholder="Avenida Presidente Vargas, 102"
                paddingRight="24"
                ref={addressRef}
                required
                onSubmit={handleAddress}
              />
              <Button
                size="xs"
                textTransform={"uppercase"}
                position="absolute"
                right={4}
                top={2}
                zIndex="popover"
                onClick={() => console.log("oi")}
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
          <Button width="full" colorScheme={"twitter"}>
            Cadastrar Cliente
          </Button>
          <Button width="full">Resetar cadastro</Button>
        </Flex>
      </FormControl>
    </form>
  );
}
