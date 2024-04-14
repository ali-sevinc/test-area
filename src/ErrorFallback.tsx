import { Link } from "react-router-dom";

type PropsType = {
  error?: { message: string };
  resetErrorBoundary?: () => void;
};
export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: PropsType) {
  return (
    <div className=" mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-2">
      <h1 className="text-3xl">Something went wrong. 😩</h1>
      {error ? (
        <p className="text-lg font-semibold">{error?.message}</p>
      ) : (
        <p className="text-lg font-semibold">An Error Occured.</p>
      )}
      {resetErrorBoundary ? (
        <button
          className="rounded-sm bg-blue-500 px-4 py-2 text-xl text-stone-50 duration-200 hover:bg-blue-700"
          onClick={resetErrorBoundary}
        >
          Try Again
        </button>
      ) : (
        <Link
          className="rounded-sm bg-blue-500 px-4 py-2 text-xl text-stone-50 duration-200 hover:bg-blue-700"
          to="/"
        >
          Try Again
        </Link>
      )}
    </div>
  );
}
