import { useContext } from "react";
import Context from "../context/Context";
import { getGeolocation } from "../services/requests/getGeolocation";

export default async function useAddress(address: string): Promise<void> {
  const { setCoords } = useContext(Context);
  const resp = await getGeolocation(address);

  const locationData = resp.data.results;

  const lat = locationData.at(0)?.geometry.location.lat;
  const long = locationData.at(0)?.geometry.location.lng;

  if (lat !== undefined && long !== undefined) {
    setCoords([lat, long]);
  }
}
