import MenuList from "./MenuList";

import { menuData } from "./data";
export default function Menu() {
  return (
    <div className=" mx-auto mt-12 w-72 bg-stone-100">
      <ul>
        {menuData.map((item) => (
          <MenuList key={item.to} item={item} />
        ))}
      </ul>
    </div>
  );
}
