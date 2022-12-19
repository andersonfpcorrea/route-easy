import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IDelivery, IFormData, IUseFormReturn } from "../interfaces";
import storeUserAddress from "../utils/storeUserAddress";
import { postDelivery } from "../services/requests/dbRequests";

/**
 * @param addressRef Reference for the HTML input element that will receive address data
 * @example
 *  const addressRef = useRef<null | HTMLInputElement>
 *  const { isLoading, setIsLoading, handleSubmit, handleAddress } = useForm(addressRef);
 */
export default function useForm(
  addressRef: React.MutableRefObject<HTMLInputElement | null>
): IUseFormReturn {
  const [isLoading, setIsLoading] = useState(false);
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
    console.log(dataObj);

    await handleAddress();

    setDelivery((prev) => ({
      ...prev,
      name: dataObj.name,
      weigth: Number(dataObj.weigth),
    }));
  };

  useEffect(() => {
    if (
      delivery?.name !== undefined &&
      delivery?.weigth !== undefined &&
      delivery?.address !== undefined
    ) {
      setIsLoading(true);
      postDelivery(delivery)
        .then((data) => {
          const { name, weigth, address } = data as IDelivery;
          setTableData({
            name,
            weigth,
            street: address?.city as string,
            city: address?.city as string,
            country: address?.country as string,
            lat: address?.geolocation.latitude as number,
            long: address?.geolocation.longitude as number,
          });
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [delivery, setTableData]);

  return { isLoading, handleSubmit, handleAddress };
}
