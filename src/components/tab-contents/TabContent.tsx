import { useState } from "react";
import styles from "./TabContent.module.css";
import TabItem from "./TabItem";
export default function TabContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const arr = Array.from({ length: 4 }, (_, i) => i);

  function handleSelect(index: number) {
    setSelectedIndex(index);
  }

  const content = `${arr[selectedIndex] + 1}'s content rendering...`;

  return (
    <div className={styles.container}>
      <menu>
        {arr.map((index) => (
          <TabItem
            key={index}
            index={index}
            isSelected={selectedIndex === index}
            onSelect={handleSelect}
          />
        ))}
      </menu>
      <p>{content}</p>
    </div>
  );
}
