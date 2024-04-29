import { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function ProtectedRoutes() {
  const { onLogin, isAuth, onLogout } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      const localData = JSON.parse(localStorage.getItem("demo-auth-token")!);
      const token = localData?.token;
      const created_at = +localData?.created_at;
      const now = new Date().getTime();

      //token check
      if (!token && !isAuth) {
        navigate("/demo-auth/login");
        return;
      }

      //expration time check
      if (isNaN(created_at) || created_at - now < 0) {
        localStorage.removeItem("demo-auth-token");
        navigate("/demo-auth/login");
        return;
      }

      if (isAuth) return;

      async function fetchUser() {
        try {
          const res = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();

          if (!res.ok || !data.username) throw new Error("User not found.");
          onLogin(data);
        } catch (error) {
          console.error(error);
          onLogout();
          navigate("/demo-auth/login");
        }
      }
      fetchUser();
    },
    [onLogin, navigate, isAuth, onLogout],
  );

  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b-2 p-4">
        <Link to="/demo-auth" className="text-2xl">
          Demo Auth
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/demo-auth/products"
            className={({ isActive }) =>
              isActive ? "text-lg underline" : "text-lg hover:underline"
            }
          >
            Products
          </NavLink>
          {isAuth && (
            <button
              className="rounded-xl bg-purple-800 px-4 py-2 hover:bg-purple-950"
              onClick={onLogout}
            >
              Logout
            </button>
          )}
          {!isAuth && (
            <Link
              to="/demo-auth/login"
              className="rounded-xl bg-purple-800 px-4 py-2 hover:bg-purple-950"
            >
              Login
            </Link>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}
