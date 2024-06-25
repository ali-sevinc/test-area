import { useEffect, useState } from "react";
export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  image: string;
};
export function useSearchAuto() {
  const [users, setUser] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(function () {
    async function fetchUserList() {
      try {
        setIsLoading(true);
        setError(false);
        const res = await fetch("https://dummyjson.com/users?limit=208");
        if (!res.ok) throw new Error("Something went wrong.");

        const data = await res.json();
        if (!data.users.length) return;

        setUser(data.users.map((user: UserType) => user.firstName));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserList();
  }, []);

  return { users, error, isLoading };
}
