import { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
] as const;

type Country = { name: { common: string }; capital: string };

export default function CountriesPage() {
  const [filtered, setFiltered] = useState<string>("");
  const {
    countries,
    isError,
    isLoading,
    filteredCountry: country,
    setFilteredCountry: setCountry,
  } = useCountries(filtered);

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-stone-600 py-8 text-stone-50">
      <div>
        <label htmlFor="filter-country">Filter by Capital: </label>
        <select
          id="filter-country"
          defaultValue={filtered}
          className="text-stone-800"
          onChange={(e) => {
            setCountry(null);
            setFiltered(e.target.value);
          }}
        >
          <option value=""></option>
          {FILTERABLE_CAPITALS.map((capital) => (
            <option key={capital} value={capital}>
              {capital}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p>Fetching country data....</p>}
      {isError && <p>Country data could not fetched. Please try again later</p>}

      {country && !isError && !isLoading && (
        <div>
          <p>Country: {country?.name.common}</p>
          <p>Capital: {country?.capital[0]}</p>
        </div>
      )}
      {!country &&
        filtered.trim().length === 0 &&
        countries.length > 0 &&
        !isError &&
        !isLoading && (
          <ul>
            {countries.map((cnt) => (
              <li key={cnt.name.common}>
                <span>{cnt.name.common}</span>-<span>{cnt.capital}</span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

function useCountries(filtered: string) {
  const [filteredCountry, setFilteredCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      async function fetchCountries() {
        try {
          setIsError(false);
          setIsLoading(true);
          if (filtered.trim().length > 0) {
            const res = await fetch(`${url}/capital/${filtered}`);
            if (!res.ok) throw new Error("Something went wrong");

            const data = await res.json();

            console.log(data[0]);
            setFilteredCountry(data[0]);
          } else {
            const res = await fetch(`${url}/all`);
            if (!res.ok) throw new Error("Something went wrong");
            const data = await res.json();
            setCountries(data);
          }
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCountries();
    },
    [filtered],
  );

  // console.log(countries);

  return { isError, isLoading, countries, filteredCountry, setFilteredCountry };
}
