import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import {
  IDelivery,
  IFetchError,
  IFormData,
  IUseFormReturn,
  IUserFormProps,
} from "../interfaces";
import storeUserAddress from "../utils/storeUserAddress";
import {
  deleteDeliveries,
  postDelivery,
} from "../services/requests/dbRequests";

/**
 * @param props References for the HTML input elements that will receive the form's data
 * @example
 *  const nameRef = useRef<null | HTMLInputElement>
 *  const weigthRef = useRef<null | HTMLInputElement>
 *  const addressRef = useRef<null | HTMLInputElement>
 *  const { isLoading, handleSubmit, handleAddress, error } = useForm({nameRef, weigthRef, addressRef});
 */
export default function useForm(props: IUserFormProps): IUseFormReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<IFetchError | null>(null);
  const [delivery, setDelivery] = useState<IDelivery | null>(null);

  const { setCoords, setUpdateTable } = useContext(Context);

  const handleDelete = (): void => {
    setIsDeleting(true);
    deleteDeliveries()
      .then((data) => {
        if (data !== null)
          return setError({
            error: { message: data.error?.message as string },
          });
        // Dispatch order to update table:
        setUpdateTable(true);
        // Dispatch order to update map pins:
        setCoords(null);
      })
      .catch((e) => {
        const { message, stack } = e as Error;
        setError({ error: { message, stack } });
      })
      .finally(() => setIsDeleting(false));
  };

  const handleAddress = async (): Promise<void> => {
    const { value } = props.addressRef.current as HTMLInputElement;
    const addressObj = await storeUserAddress(value, setCoords);
    setDelivery({ address: addressObj });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    const entries = [...new FormData(e.target as HTMLFormElement)];
    const dataObj: IFormData<string> = Object.fromEntries(entries);

    await handleAddress();

    // Define the delivery object to be sent to db:
    setDelivery((prev) => ({
      ...prev,
      name: dataObj.name,
      weigth: Number(dataObj.weigth),
    }));

    // Reset form fields:
    Object.values(props).forEach(
      (ref: React.MutableRefObject<HTMLInputElement>) => {
        ref.current.value = "";
      }
    );
  };

  useEffect(() => {
    if (
      delivery?.name !== undefined &&
      delivery?.weigth !== undefined &&
      delivery?.address !== undefined
    ) {
      setIsLoading(true);

      // POST delivery object to be stored into db:
      postDelivery(delivery)
        // Then dispatch order to update tableData (useDeliveries hook):
        .then(() => setUpdateTable(true))
        .catch((err) => {
          const { message, stack } = err as Error;
          setError({ error: { message, stack } });
        })
        .finally(() => {
          setIsLoading(false);
          // Reset the 'delivery' object on global store
          setDelivery(null);
        });
    }
  }, [delivery, setUpdateTable]);

  return {
    isLoading,
    handleSubmit,
    handleAddress,
    error,
    isDeleting,
    handleDelete,
  };
}
