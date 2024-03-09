import { Outlet } from "react-router-dom";
import Header from "../comps/Header";
import Tags from "../comps/Tags";
import TagsHamburgerButton from "../comps/TagsHamburgerButton";
import TagsHamburgerMenu from "../comps/TagsHamburgerMenu";

export default function RootPage() {
  return (
    <>
      <TagsHamburgerMenu />
      <div className="h-screen overflow-hidden text-stone-700">
        <Header />
        <main className=" md:grid md:grid-cols-[14rem,1fr] pt-20">
          <div className="hidden md:block ">
            <Tags />
          </div>
          <div className="md:hidden">
            <TagsHamburgerButton />
          </div>
          <div className="h-screen overflow-y-scroll">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
