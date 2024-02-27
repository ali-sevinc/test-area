import { ChangeEvent, FormEvent } from "react";
import styles from "./WeatherForm.module.css";

type PropsType = {
  isLoading: boolean;
  value: string;
  onSubmit: (event: FormEvent) => void;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function WeatherForm({
  onSubmit,
  isLoading,
  value,
  setValue,
}: PropsType) {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.inputs}>
        <p>
          <label htmlFor="city">City</label>
          <input onChange={setValue} value={value} id="city" />
        </p>
        <button disabled={isLoading}>Submit</button>
      </div>
    </form>
  );
}
