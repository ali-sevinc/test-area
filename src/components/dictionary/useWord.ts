import { useState } from "react";

export function useWord() {
  const [word, setWord] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWord(query: string) {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error("");
      setWord(data?.[0] || data);
    } catch (error) {
      console.error("Error", error);
      setError(`Your search -${query}- did not match any documents.`);
    } finally {
      setIsLoading(false);
    }
  }

  return { word, error, isLoading, fetchWord };
}
