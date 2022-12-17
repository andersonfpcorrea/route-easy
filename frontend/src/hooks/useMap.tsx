import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type IUseMapProps = "standard" | "grey" | "dark";

interface ILeafletThemeData {
  url: string;
  maxZoom: number;
  attribution: string;
}

interface ILeafletThemes {
  standard: ILeafletThemeData;
  grey: ILeafletThemeData;
  dark: ILeafletThemeData;
}

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
  useEffect(() => {
    const map = L.map("map").setView([-22.907, -43.173], 13);
    L.tileLayer(LeafletThemes[theme].url, {
      maxZoom: LeafletThemes[theme].maxZoom,
      attribution: LeafletThemes[theme].attribution,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, [theme]);
}
