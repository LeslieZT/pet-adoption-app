import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DivIcon } from "leaflet";

const CustomMarkerIcon = (gender: string) => {
  return new DivIcon({
    html: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="${gender === "male" ? "text-aqua-blue" : "text-vibrant-pink"}"
    >
      <circle
        cx="256"
        cy="192"
        r="32"
        fill="currentColor"
      />
      <path
        fill="currentColor"
        d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
      />
    </svg>`,
    className: "svg-location-icon",
    iconSize: [36, 28],
    iconAnchor: [18, 10],
  });
};

interface MapComponentProps {
  market: string;
  position: [number, number];
  gender: "male" | "female";
  classname?: string;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  position,
  market,
  gender,
  classname,
}) => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        className={`relative z-10 rounded-lg shadow-lg min-h-[350px] min-w-[250px] ${classname}`}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={CustomMarkerIcon(gender)}
        >
          <Popup>{market}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
