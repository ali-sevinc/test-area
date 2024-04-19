import { LeafletMouseEvent } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";

export default function Map() {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);
  const [locationDetails, setLocationDetails] = useState({
    counry: "",
    city: "",
    display_name: "",
    country_code: "",
  });
  const [error, setError] = useState<boolean>(false);

  function handleClick(e: LeafletMouseEvent) {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  }

  useEffect(
    function () {
      async function fetchDetails() {
        setError(false);
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`,
          );

          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          if (data.error) throw new Error(data.error);

          setLocationDetails({
            city:
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.region ||
              data.address.state,
            counry: data.address.country,
            display_name: data.display_name,
            country_code: data.address.country_code,
          });
        } catch (error) {
          setError(true);
        }
      }
      fetchDetails();
    },
    [position],
  );

  return (
    <div className={styles.mapContainer}>
      <div className={styles.details}>
        {error && (
          <div>
            <h1>An error occured</h1>
            <p>Unable to geocode</p>
          </div>
        )}
        {!error && (
          <div>
            <h1>
              <span>{locationDetails.counry}</span>
              <img
                src={`https://flagsapi.com/${locationDetails?.country_code.toUpperCase()}/flat/32.png`}
              ></img>
            </h1>
            <h2>{locationDetails.city}</h2>
            <p>{locationDetails.display_name}</p>
          </div>
        )}
      </div>
      <MapContainer
        className={styles.map}
        center={position}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {error && <p>Details not found.</p>}
            {!error && <p>{locationDetails.display_name}</p>}
          </Popup>
        </Marker>

        {/* events*/}
        <MapClick onMouseClick={handleClick} />
        <MapCenter position={position} />
      </MapContainer>
    </div>
  );
}

function MapClick({
  onMouseClick,
}: {
  onMouseClick: (e: LeafletMouseEvent) => void;
}) {
  useMapEvents({
    click: onMouseClick,
  });
  return null;
}

function MapCenter({ position }: { position: [number, number] }) {
  const map = useMap();
  map.setView(position);
  return null;
}
