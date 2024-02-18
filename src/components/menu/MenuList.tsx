import MenuItem from "./MenuItem";
import { ItemType } from "./data";

export default function MenuList({ item }: { item: ItemType }) {
  return (
    <li>
      <MenuItem item={item} />
    </li>
  );
}
