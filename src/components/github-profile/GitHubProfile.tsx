import { useState } from "react";
import GitForm from "./GitForm";
import Result from "./Result";

export type ProfileType = {
  created_at: string;
  html_url: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  location: string;
};
export default function GitHubProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function fetchUser(userName: string) {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) throw new Error("Something went wrong.");

      const data = await res.json();
      // console.log(data);
      setProfile(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-slate-800 pt-24">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center rounded-xl py-8 gap-8 ">
        <GitForm onFetchUser={fetchUser} />
        {isError && (
          <h2 className="text-stone-50 text-2xl">Fetching user data failed.</h2>
        )}
        {isLoading && <h2>Fetching user...</h2>}
        {!isError && !isLoading && profile && <Result profile={profile} />}
      </div>
    </div>
  );
}
