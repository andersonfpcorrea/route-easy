import { ReactElement, useContext, useRef } from "react";
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
import Context from "../context/Context";
import useForm from "../hooks/useForm";

export default function FormMain(): ReactElement {
  const addressRef = useRef<null | HTMLInputElement>(null);
  const { coords } = useContext(Context);

  const { isLoading, handleSubmit, handleAddress } = useForm(addressRef);

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
            <Input
              placeholder="John"
              name="name"
              type={"text"}
              minLength={2}
              maxLength={40}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Peso da entrega (kg)</FormLabel>
            <InputGroup>
              <Input
                placeholder="10"
                name="weigth"
                type={"number"}
                step={0.001}
                min={0.1}
                max={1000}
              />
              <InputRightAddon>kg</InputRightAddon>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Endereço de entrega</FormLabel>
            <Box position="relative">
              <Input
                placeholder="Avenida Presidente Vargas, 102"
                paddingRight="24"
                ref={addressRef}
                required
                type={"text"}
              />
              <Button
                size="xs"
                textTransform={"uppercase"}
                position="absolute"
                right={4}
                top={2}
                zIndex="popover"
                onClick={handleAddress}
              >
                Buscar
              </Button>
            </Box>
          </FormControl>
        </Flex>

        <Flex gap={2}>
          <Input
            type={"text"}
            placeholder={`${
              coords === null || coords.at(0) === undefined
                ? "Latitude"
                : String(coords.at(0))
            }`}
            disabled
          />
          <Input
            type={"text"}
            placeholder={`${
              coords === null || coords.at(1) === undefined
                ? "Longitude"
                : String(coords.at(1))
            }`}
            disabled
          />
        </Flex>

        <Flex gap={4} direction="column">
          <Button
            width="full"
            colorScheme={"twitter"}
            type={"submit"}
            isLoading={isLoading}
          >
            Cadastrar Cliente
          </Button>
          <Button width="full" type={"submit"}>
            Resetar cadastro
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}
