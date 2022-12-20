import { getGeolocation } from "../services/requests/getGeolocation";
import { IAddress, ICoords, IGeoData, IResultData } from "../interfaces";
import { LatLngTuple } from "leaflet";

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
      placeId: "",
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

  // Define place_id field:
  addressObj.placeId = address.place_id;

  return addressObj;
};

export default async function storeUserAddress(
  address: string,
  setCoords: React.Dispatch<React.SetStateAction<ICoords[] | null>>
): Promise<IAddress> {
  const data = (await getGeolocation(address)) as IGeoData;

  const [locationData] = data.results;

  const lat = locationData?.geometry.location.lat;
  const long = locationData?.geometry.location.lng;

  if (lat !== undefined && long !== undefined) {
    setCoords((prev) => {
      const newCoords = {
        placeId: locationData.place_id,
        coords: [lat, long] as LatLngTuple,
      };
      if (prev === null) return [newCoords];
      return [...prev, newCoords];
    });
  }

  return defineAddress(locationData);
}
