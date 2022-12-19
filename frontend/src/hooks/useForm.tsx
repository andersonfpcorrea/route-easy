import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IFormData, IUseFormReturn } from "../interfaces";
import storeUserAddress from "../utils/storeUserAddress";

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
  const { setDelivery, delivery, setCoords } = useContext(Context);

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
      //! Continuar daqui: fazer a requisição axios.post para a API
    }
  }, [delivery]);

  return { isLoading, setIsLoading, handleSubmit, handleAddress };
}
