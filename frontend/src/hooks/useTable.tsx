import { ReactElement, useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IDeliveryTable, IFetchError, IUseTableReturn } from "../interfaces";
import { Button, Flex, Icon, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteDelivery } from "../services/requests/dbRequests";

export default function useTable(): IUseTableReturn {
  const { tableData, setUpdateTable, isLoadingDeliveries } =
    useContext(Context);
  const [tableRows, setTableRows] = useState<Array<
    ReactElement<any, string | React.JSXElementConstructor<any>>
  > | null>(null);
  const [tableError, setTableError] = useState<IFetchError | null>(null);

  const handleDelete = (id: string): void => {
    deleteDelivery(id)
      .then((data) => {
        if (data !== null)
          return setTableError({
            error: { message: data.error?.message as string },
          });
        setUpdateTable(true);
      })
      .catch((e) => {
        const { message, stack } = e as Error;
        setTableError({ error: { message, stack } });
      });
  };

  const markup = (delivery: IDeliveryTable): ReactElement => (
    <Tr key={delivery.id}>
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
          <Button
            onClick={() => handleDelete(delivery.id)}
            isLoading={isLoadingDeliveries}
          >
            {!isLoadingDeliveries && <Icon as={DeleteIcon} />}
          </Button>
        </Flex>
      </Td>
    </Tr>
  );

  useEffect(() => {
    if (tableData !== null) {
      const rows = tableData.map((t) => markup(t));
      setTableRows(rows);
    }
  }, [tableData]);

  return { tableRows, tableError };
}
