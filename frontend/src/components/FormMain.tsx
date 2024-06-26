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
  const nameRef = useRef<null | HTMLInputElement>(null);
  const weigthRef = useRef<null | HTMLInputElement>(null);
  const addressRef = useRef<null | HTMLInputElement>(null);
  const latRef = useRef<null | HTMLInputElement>(null);
  const longRef = useRef<null | HTMLInputElement>(null);

  const { coords } = useContext(Context);

  const { isLoading, handleSubmit, handleAddress, handleDelete, isDeleting } =
    useForm({
      nameRef,
      weigthRef,
      addressRef,
      latRef,
      longRef,
    });

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
        width="96"
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
              ref={nameRef}
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
                ref={weigthRef}
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
              coords === null ||
              coords.at(-1) === undefined ||
              nameRef.current?.value === ""
                ? "Latitude"
                : String(coords[coords.length - 1].coords[0].toFixed(4))
            }`}
            disabled
            ref={latRef}
          />
          <Input
            type={"text"}
            placeholder={`${
              coords === null ||
              coords[coords.length - 1] === undefined ||
              nameRef.current?.value === ""
                ? "Longitude"
                : String(coords[coords.length - 1].coords[1].toFixed(4))
            }`}
            disabled
            ref={longRef}
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
          <Button
            width="full"
            type={"submit"}
            onClick={handleDelete}
            isLoading={isDeleting}
          >
            Resetar cadastro
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}
