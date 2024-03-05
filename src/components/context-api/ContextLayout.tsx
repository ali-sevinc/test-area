import { Outlet } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";

export default function ContextLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
