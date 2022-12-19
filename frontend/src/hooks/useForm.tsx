import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import {
  IDelivery,
  IDeliveryTable,
  IFetchError,
  IFormData,
  IUseFormReturn,
} from "../interfaces";
import storeUserAddress from "../utils/storeUserAddress";
import { getDeliveries, postDelivery } from "../services/requests/dbRequests";

/**
 * @param addressRef Reference for the HTML input element that will receive address data
 * @example
 *  const addressRef = useRef<null | HTMLInputElement>
 *  const { isLoading, handleSubmit, handleAddress, error } = useForm(addressRef);
 */
export default function useForm(
  addressRef: React.MutableRefObject<HTMLInputElement | null>
): IUseFormReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<IFetchError | null>(null);
  const { setDelivery, delivery, setCoords, setTableData } =
    useContext(Context);

  const handleAddress = async (): Promise<void> => {
    const { value } = addressRef.current as HTMLInputElement;
    const addressObj = await storeUserAddress(value, setCoords);
    setDelivery((prev) => ({ ...prev, address: addressObj }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    const entries = [...new FormData(e.target as HTMLFormElement)];
    const dataObj: IFormData<string> = Object.fromEntries(entries);

    await handleAddress();

    setDelivery((prev) => ({
      ...prev,
      name: dataObj.name,
      weigth: Number(dataObj.weigth),
    }));
  };

  const createTableDataArray = (data: IDelivery[]): IDeliveryTable[] =>
    data.map((el) => ({
      name: el.name,
      weigth: el.weigth,
      street: el.address?.street as string,
      city: el.address?.city as string,
      country: el.address?.country as string,
      lat: el.address?.geolocation.latitude as number,
      long: el.address?.geolocation.longitude as number,
      timestamp: Date.now(),
    }));

  useEffect(() => {
    if (
      delivery?.name !== undefined &&
      delivery?.weigth !== undefined &&
      delivery?.address !== undefined
    ) {
      setIsLoading(true);

      // Send delivery objtect to be stored into db:
      postDelivery(delivery)
        // Then, get the updated deliveries list from db
        .then(async () => await getDeliveries())
        // Model the data to be displayed on ui:
        .then((data) => createTableDataArray(data as IDelivery[]))
        // Store the array od deliveries on global store:
        .then((tableArray) => setTableData(tableArray))

        .catch((err) => {
          const { message, stack } = err as Error;
          setError({ error: { message, stack } });
        })
        .finally(() => setIsLoading(false));
    }
  }, [delivery, setTableData]);

  return { isLoading, handleSubmit, handleAddress, error };
}
