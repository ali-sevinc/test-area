import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootAuthPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
