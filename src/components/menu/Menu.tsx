import MenuList from "./MenuList";

import { menuData } from "./data";
export default function Menu() {
  return (
    <div className="min-h-screen bg-stone-700 pt-12">
      <div className=" mx-auto w-72 rounded-lg bg-stone-100 py-4">
        <ul>
          {menuData.map((item) => (
            <MenuList key={item.to} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
