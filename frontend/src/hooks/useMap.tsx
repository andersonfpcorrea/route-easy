import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletThemes: Record<string, string> = {
  standard: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  grey: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
};

type IUseMapProps = "standard" | "grey";

export default function useMap(theme: IUseMapProps): void {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer(LeafletThemes[theme], {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, [theme]);
}
