import { useDispatch } from "react-redux";
import styles from "./CategoriesItem.module.css";
import { searhHandle } from "./shopSlice";
export default function CategoriesItem({
  category,
  isActive,
  onActive,
}: {
  category: string;
  isActive: boolean;
  onActive: () => void;
}) {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        role="a"
        onClick={() => {
          dispatch(searhHandle(category));
          onActive();
        }}
        className={`${styles.category} ${isActive ? styles.active : undefined}`}
      >
        {category}
      </button>
    </li>
  );
}
