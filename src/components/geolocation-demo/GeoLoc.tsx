import { useState } from "react";

type PositionType = { lat: number | null; lng: number | null };
type AddressType = {
  city: string;
  country: string;
  region: string;
  road: string;
  countryCode: string;
};
export default function GeoLoc() {
  const [position, setPosition] = useState<PositionType>({
    lat: null,
    lng: null,
  });
  const [address, setAddress] = useState<AddressType>({
    city: "",
    country: "",
    region: "",
    road: "",
    countryCode: "",
  });
  const [error, setError] = useState<string | null>(null);

  function handleGetPosition() {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setError(null);
        setPosition({ lat, lng });
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        console.log(data);
        const address = {
          city: data.address.city,
          country: data.address.country,
          region: data.address.region,
          road: data.address.road,
          countryCode: data.address.country_code,
        };
        setAddress(address);
      },
      (err) => {
        setError(err.message || "Getting position failed.");
      }
    );
  }

  return (
    <div className="w-96 bg-stone-200 mx-auto mt-24 rounded-xl p-8 flex flex-col gap-8 items-center">
      <h1 className="text-2xl font-semibold text-center">
        Get Your Position&Address
      </h1>
      <button
        onClick={handleGetPosition}
        className=" bg-stone-600 text-stone-50 px-4 py-2 rounded-lg"
      >
        Get Position
      </button>
      {!error && (
        <div>
          <p>
            <span>Latitute: </span> <b>{position.lat || "---"}</b>
          </p>
          <p>
            <span>Longititute: </span> <b>{position.lng || "---"}</b>
          </p>
          <p className="flex items-center gap-1">
            <span>Flag: </span>
            {address.countryCode && (
              <img
                src={`https://flagsapi.com/${address.countryCode.toUpperCase()}/flat/32.png`}
              />
            )}
          </p>
          <p>
            <span>Country: </span> <b>{address.country || "---"}</b>
          </p>
          <p>
            <span>Region: </span> <b>{address.region || "---"}</b>
          </p>
          <p>
            <span>City: </span> <b>{address.city || "---"}</b>
          </p>
          <p>
            <span>Road: </span> <b>{address.road || "---"}</b>
          </p>
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
