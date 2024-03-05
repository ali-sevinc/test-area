import MenuItem from "./MenuItem";
import { ItemType } from "./data";

export default function MenuList({ item }: { item: ItemType }) {
  return (
    <li className="pl-8">
      <MenuItem item={item} />
    </li>
  );
}
