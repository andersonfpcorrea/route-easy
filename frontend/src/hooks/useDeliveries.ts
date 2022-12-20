import { useEffect, useState } from "react";
import { getDeliveries } from "../services/requests/dbRequests";
import {
  IDelivery,
  IDeliveryTable,
  IFetchError,
  IUseDeliveriesReturn,
} from "../interfaces";

export default function useDeliveries(): IUseDeliveriesReturn {
  const [tableData, setTableData] = useState<IDeliveryTable[] | null>(null);
  const [errorDeliveries, setErrorDeliveries] = useState<IFetchError | null>(
    null
  );
  const [isLoadingDeliveries, setIsLoadingDeliveries] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const createTableDataArray = (data: IDelivery[]): IDeliveryTable[] =>
    data.map((el) => ({
      id: el._id as string,
      name: el.name,
      weigth: el.weigth,
      street: el.address?.street as string,
      city: el.address?.city as string,
      country: el.address?.country as string,
      lat: el.address?.geolocation.latitude as number,
      long: el.address?.geolocation.longitude as number,
      placeId: el.address?.placeId as string,
    }));

  useEffect(() => {
    getDeliveries()
      .then((data) => createTableDataArray(data as IDelivery[]))
      .then((tableArray) => setTableData(tableArray))
      .catch((err) => {
        const { message, stack } = err as Error;
        setErrorDeliveries({ error: { message, stack } });
      })
      .finally(() => {
        setIsLoadingDeliveries(false);
        setUpdateTable(false);
      });
  }, [updateTable]);

  return { tableData, errorDeliveries, isLoadingDeliveries, setUpdateTable };
}
