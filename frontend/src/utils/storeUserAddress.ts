import { LatLngTuple } from "leaflet";
import { getGeolocation } from "../services/requests/getGeolocation";
import { IResultData } from "../interfaces";

export default async function storeUserAddress(
  address: string,
  setCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>
): Promise<IResultData[]> {
  const resp = await getGeolocation(address);

  const locationData = resp.data.results;

  const lat = locationData.at(0)?.geometry.location.lat;
  const long = locationData.at(0)?.geometry.location.lng;

  if (lat !== undefined && long !== undefined) {
    setCoords([lat, long]);
  }

  return resp.data.results;
}
