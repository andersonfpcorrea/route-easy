import { useContext, useEffect } from "react";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import Context from "../context/Context";
import { ILeafletThemes, IUseMapProps } from "../interfaces";

const leafletThemes: ILeafletThemes = {
  standard: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 19,
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    iconColor: "rgb(24,100,171)",
  },
  grey: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 16,
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    iconColor: "rgb(33,37,41)",
  },
  dark: {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    iconColor: "rgb(33,37,41)",
  },
};

const mapZoomLvl = 13;
const defaultCoords: LatLngTuple = [-22.907, -43.173];
const iconElement = (n: number, theme: IUseMapProps = "standard"): string =>
  `<div style='position:relative;width:fit-content;height:fit-content;transform:translate(-12px, -35px)'>
    <div style='background-color:${
      leafletThemes[theme].iconColor
    };width:32px;height:32px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:1px 1px 5px rgb(255,255,255,0.4)'>
      <div style='transform:rotate(45deg);width:100%;height:100%'>
        <div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:14px;font-weight:600'>
          ${n + 1}
        </div>
      </div>
    </div>
  </div>`;

export default function useMap(theme: IUseMapProps): void {
  const { coords, tableData } = useContext(Context);

  useEffect(() => {
    const mapLocation =
      coords === null || coords.length === 0
        ? defaultCoords
        : coords[coords.length - 1].coords;

    const map = L.map("map").setView(mapLocation, mapZoomLvl);
    L.tileLayer(leafletThemes[theme].url, {
      maxZoom: leafletThemes[theme].maxZoom,
      attribution: leafletThemes[theme].attribution,
    }).addTo(map);

    if (coords !== null && tableData !== null && tableData.length > 0) {
      coords.forEach((c, i) => {
        L.marker(c.coords, {
          icon: L.divIcon({
            className: "",
            html: iconElement(i, theme),
          }),
        })
          .on("click", () =>
            map.setView(c.coords, mapZoomLvl, {
              animate: true,
              duration: 0.4,
            })
          )
          .addTo(map)
          .bindPopup(
            `${tableData[i]?.name as string} - ${
              tableData[i]?.weigth as number
            }kg`,
            { offset: [-3, -35] }
          )
          .openPopup();
      });
    }

    return () => {
      map.remove();
    };
  }, [coords, theme, tableData]);
}
