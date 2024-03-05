type PropsType = {
  day: string;
  description: string;
  temperature: string;
  wind: string;
};
export default function WeatherItem({
  day,
  description,
  temperature,
  wind,
}: PropsType) {
  return (
    <>
      <h4>{day}</h4>
      {description && (
        <p>
          <span>Description: </span>
          <span>{description}</span>
        </p>
      )}
      <p>
        <span>Temperature: </span>
        <span>{temperature}</span>
      </p>
      <p>
        <span>Wind: </span>
        <span>{wind}</span>
      </p>
    </>
  );
}
