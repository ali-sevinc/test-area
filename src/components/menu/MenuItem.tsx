import MenuList from "./MenuList";
import { ItemType } from "./data";

type PropsType = { item: ItemType };
export default function MenuItem({ item }: PropsType) {
  return (
    <div>
      <a href={`#${item.to}`}>{item.name}</a>
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((i) => (
            <MenuList key={i.to} item={i} />
          ))}
        </ul>
      )}
    </div>
  );
}
