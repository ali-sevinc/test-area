import { FormEvent, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const EXPIRATION_MINS = 60;

export default function Login() {
  const [userCredentials, setUserCredentials] = useState({
    userName: "emilys",
    password: "emilyspass",
  });
  const [authError, setAuthError] = useState<string>("");
  const { isAuth } = useUser();
  const navigate = useNavigate();

  const [fakeUsers, setFakeUsers] = useState<
    { username: string; password: string; id: number }[]
  >([]);

  function handleChange(identify: "userName" | "password", value: string) {
    setUserCredentials((cur) => ({ ...cur, [identify]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const username = userCredentials.userName;
    const password = userCredentials.password;
    setAuthError("");
    if (username.trim().length < 3 || password.trim().length < 4) return;

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.token) throw new Error("User not found.");
      const token = data.token;
      const date = new Date().getTime() + 1000 * 60 * EXPIRATION_MINS; //MS * SECS * MINS (mins expiration time)
      const localData = { token, created_at: date };
      localStorage.setItem("demo-auth-token", JSON.stringify(localData));
      navigate("/demo-auth");
    } catch (error) {
      console.error(error);
      setAuthError("User not found.");
    }
  }

  useEffect(
    function () {
      if (isAuth) return navigate("/demo-auth");
    },
    [isAuth, navigate],
  );

  useEffect(function () {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users?limit=5");
      const data = await res.json();

      setFakeUsers(data.users);
    }
    fetchUsers();
  }, []);

  function clickToChangeUser(username: string, password: string) {
    setUserCredentials({ userName: username, password: password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed left-[50%] top-[14rem] mx-auto flex w-full max-w-lg -translate-x-[50%] flex-col gap-4 rounded-lg bg-violet-200 px-4 py-7 text-stone-700"
    >
      <h1 className="text-2xl font-semibold">Login</h1>
      <div className="flex flex-col gap-4">
        <p className="flex  flex-col justify-between">
          <label htmlFor="username">User Name</label>
          <input
            value={userCredentials.userName}
            onChange={(e) => handleChange("userName", e.target.value)}
            id="username"
            type="text"
            className="px-2 py-1"
          />
        </p>
        <p className="flex flex-col justify-between">
          <label htmlFor="password">Password</label>
          <input
            value={userCredentials.password}
            onChange={(e) => handleChange("password", e.target.value)}
            id="password"
            type="password"
            className="px-2 py-1"
          />
        </p>
        <p className="text-end">
          <button className="bg-violet-900 px-4 py-2 text-stone-50">
            Login
          </button>
        </p>
        {authError && <p className="text-sm text-red-500">{authError}</p>}
      </div>
      <div className="border-t-2 pt-4 text-center">
        <h2 className="text-2xl">Fake Users</h2>
        <p>Click to a user to login.</p>
        <div>
          <ul>
            {fakeUsers.map((user) => (
              <li key={user.id}>
                <button
                  className="text-lg hover:underline"
                  onClick={() =>
                    clickToChangeUser(user.username, user.password)
                  }
                >
                  {user.username}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
}
