import { FormEvent, useRef, useState } from "react";
import styles from "./Weather.module.css";
import WeatherItem from "./WeatherItem";
import WeatherForm from "./WeatherForm";

const BASE_URL = "https://goweather.herokuapp.com/weather";

type WeatherType = {
  description: string;
  temperature: string;
  wind: string;
  day: string;
};

type DataType = WeatherType & { forecast: WeatherType[] };
export default function Weather() {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<DataType | null>(null);

  const cityRef = useRef<string>("");

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!city || city.trim().length < 2) return;
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${city}`);
      if (!res.ok) throw new Error("An error occured");
      const resData = await res.json();
      // console.log(resData);
      setData(resData);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      cityRef.current = city;
    }
  }

  return (
    <div className={styles.container}>
      <WeatherForm
        isLoading={isLoading}
        value={city}
        onSubmit={handleSubmit}
        setValue={(e) => setCity(e.target.value.toLocaleLowerCase())}
      />
      {isError && (
        <p className={styles.error}>
          Weather data cannot fetched. Please try again later.
        </p>
      )}
      {!isError && !isLoading && data && (
        <section className={styles.forecast}>
          <h3 className={styles.cityName}>{cityRef.current}</h3>
          <div className={styles.today}>
            <WeatherItem {...data} day="Today" />
          </div>

          <div>
            <h3>Forecast</h3>
            <ul>
              {data.forecast.map((fore) => (
                <li key={fore.day}>
                  <WeatherItem {...fore} day={`Day-${fore.day}`} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
