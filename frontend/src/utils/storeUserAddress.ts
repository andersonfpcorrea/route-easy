import { LatLngTuple } from "leaflet";
import { getGeolocation } from "../services/requests/getGeolocation";
import { IAddress, IGeoData, IResultData } from "../interfaces";

const defineAddress = (address: IResultData): IAddress => {
  const keys = [
    "number",
    "street",
    "neighbourhood",
    "city",
    "state",
    "country",
    "complement",
  ];

  const addressObj: Record<string, string | Record<string, number>> & IAddress =
    {
      number: "",
      street: "",
      neighbourhood: "",
      city: "",
      state: "",
      country: "",
      geolocation: {
        latitude: 0,
        longitude: 0,
      },
      complement: "",
    };

  // Define values on 'addressObj' - execept for 'geolocation' key:
  address.address_components.forEach((component, i) => {
    addressObj[keys[i]] = component.long_name;
  });

  // Define coordinates in 'addressObj':
  addressObj.geolocation = {
    latitude: address.geometry.location.lat,
    longitude: address.geometry.location.lng,
  };

  return addressObj;
};

export default async function storeUserAddress(
  address: string,
  setCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>
): Promise<IAddress> {
  const data = (await getGeolocation(address)) as IGeoData;

  const [locationData] = data.results;

  const lat = locationData?.geometry.location.lat;
  const long = locationData?.geometry.location.lng;

  if (lat !== undefined && long !== undefined) {
    setCoords([lat, long]);
  }

  return defineAddress(locationData);
}
