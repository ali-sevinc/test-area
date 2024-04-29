import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="mx-auto mt-24 flex w-full max-w-xl flex-col items-start gap-4 rounded-xl bg-red-200 px-4 py-8">
      <h1 className="text-2xl">An error occured</h1>
      <p className="text-lg">
        User not found please double check your credentials.
      </p>
      <Link
        to="/demo-auth/login"
        className="  rounded-lg px-4 py-2 text-lg hover:underline"
      >
        &larr; Go Back
      </Link>
    </div>
  );
}
