import styles from "./TabItem.module.css";

type PropsType = {
  isSelected: boolean;
  index: number;
  onSelect: (index: number) => void;
};
export default function TabItem({ isSelected, index, onSelect }: PropsType) {
  return (
    <li
      onClick={() => onSelect(index)}
      className={`${styles.item} ${isSelected ? styles.selected : ""}`}
    >
      <span>Tab {index + 1}</span>
    </li>
  );
}
