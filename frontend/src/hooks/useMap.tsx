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

const mapZoomLvl = 13;
const defaultCoords: LatLngTuple = [-22.907, -43.173];

export default function useMap(theme: IUseMapProps): void {
  const { coords, tableData } = useContext(Context);

  useEffect(() => {
    const mapLocation =
      coords === null || coords.length === 0
        ? defaultCoords
        : coords[coords.length - 1].coords;

    const map = L.map("map").setView(mapLocation, mapZoomLvl);
    L.tileLayer(LeafletThemes[theme].url, {
      maxZoom: LeafletThemes[theme].maxZoom,
      attribution: LeafletThemes[theme].attribution,
    }).addTo(map);

    if (coords !== null && tableData !== null && tableData.length > 0) {
      coords.forEach((c, i) => {
        console.log(c.coords, tableData[i]?.name);

        L.marker(c.coords)
          .on("click", () =>
            map.setView(c.coords, mapZoomLvl, {
              animate: true,
              duration: 1,
            })
          )
          .addTo(map)
          .bindPopup(
            `${tableData[i]?.name as string} - ${
              tableData[i]?.weigth as number
            }kg`
          )
          .openPopup();
      });
    }

    return () => {
      map.remove();
    };
  }, [coords, theme, tableData]);
}
