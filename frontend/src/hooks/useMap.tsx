import { useContext, useEffect } from "react";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import Context from "../context/Context";
import { ILeafletThemes, IUseMapProps } from "../interfaces";

const LeafletThemes: ILeafletThemes = {
  standard: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 19,
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
  },
  grey: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 16,
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
  },
  dark: {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
};

export default function useMap(theme: IUseMapProps): void {
  const defaultCoords: LatLngTuple = [-22.907, -43.173];
  const { coords } = useContext(Context);
  const mapLocation =
    coords === null || coords.length === 0
      ? defaultCoords
      : coords[coords.length - 1].coords;

  useEffect(() => {
    const map = L.map("map").setView(mapLocation, 13);
    L.tileLayer(LeafletThemes[theme].url, {
      maxZoom: LeafletThemes[theme].maxZoom,
      attribution: LeafletThemes[theme].attribution,
    }).addTo(map);
    if (coords !== null) {
      coords.forEach((c) => L.marker(c.coords).addTo(map));
    }

    return () => {
      map.remove();
    };
  }, [mapLocation, coords, theme]);
}
