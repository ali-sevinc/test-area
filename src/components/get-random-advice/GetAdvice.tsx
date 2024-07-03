import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { GiShirtButton } from "react-icons/gi";

type AdviceType = { id: number; advice: string };

export default function GetAdvice() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    async function fetchAdvice() {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        if (!res.ok) throw new Error("Err");
        setAdvice(data?.slip);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAdvice();
  }, []);

  async function handleGetAdvice() {
    try {
      setLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      if (!res.ok) throw new Error("Err");
      setAdvice(data?.slip);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid h-screen items-center justify-center bg-zinc-700">
      <div className="min-w-24rem flex flex-col items-center gap-4 rounded-xl bg-zinc-800 px-4 py-2 text-center text-zinc-50 shadow-xl">
        {!loading && !error && advice !== null && (
          <>
            <h2 className="text-2xl">Advice #{advice.id}</h2>
            <p className="text-lg">{advice.advice}</p>
          </>
        )}
        {error && !loading && (
          <h2 className="text-2xl">
            Advice could not fetched. Something went wrong.
          </h2>
        )}
        {loading && <p>Loading....</p>}

        <div className="flex w-full items-center justify-between gap-2">
          <div className="h-0.5 w-full bg-zinc-50" />
          <FaQuoteRight className="text-2xl" />
          <div className="h-0.5 w-full bg-zinc-50" />
        </div>
        <button
          onClick={handleGetAdvice}
          disabled={loading}
          className={`text-4xl ${loading ? "animate-spin" : ""}`}
        >
          <GiShirtButton />
        </button>
      </div>
    </div>
  );
}
