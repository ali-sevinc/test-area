import { Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-violet-800 to-purple-600 text-stone-50">
      <Outlet />
    </div>
  );
}
