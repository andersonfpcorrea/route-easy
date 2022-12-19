import { ReactElement, useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IDeliveryTable } from "../interfaces";
import { Button, Flex, Icon, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function useTable(): Array<
  ReactElement<any, string | React.JSXElementConstructor<any>>
> | null {
  const { tableData } = useContext(Context);
  const [tableRows, setTableRows] = useState<Array<
    ReactElement<any, string | React.JSXElementConstructor<any>>
  > | null>(null);

  const markup = (delivery: IDeliveryTable): ReactElement => (
    <Tr key={delivery.timestamp}>
      <Td>{delivery.name}</Td>
      <Td>{delivery.street}</Td>
      <Td>{delivery.city}</Td>
      <Td>{delivery.country}</Td>
      <Td isNumeric>{delivery.weigth}</Td>
      <Td isNumeric>{delivery.lat}</Td>
      <Td isNumeric>{delivery.long}</Td>
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
  );

  useEffect(() => {
    console.log("I tried");
    console.log(tableData);

    if (tableData !== null && tableData.length > 0) {
      console.log("I am updated");

      const rows = tableData.map((t) => markup(t));
      setTableRows(rows);
    }
  }, [tableData]);

  return tableRows;
}
