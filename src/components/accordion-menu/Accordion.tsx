import { useState } from "react";
import AccordionItem from "./AccordionItem";

const DUMMY_ITEM = [
  {
    id: 1,
    title: "Accordion item 1",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
  },
  {
    id: 2,
    title: "Accordion item 2",
    text: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
  },
  {
    id: 3,
    title: "Accordion item 3",
    text: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi.",
  },
];

export default function Accordion() {
  const [openedItem, setOpenedItem] = useState<number | null>(null);

  function handleToggle(itemId: number) {
    setOpenedItem((cur) => (cur === itemId ? null : itemId));
  }

  return (
    <div className="flex flex-col items-center gap-8 mt-12">
      <h1 className="text-2xl">Accordion Menu</h1>
      <ul className="flex flex-col gap-4">
        {DUMMY_ITEM.map((item) => (
          <AccordionItem
            onOpen={() => handleToggle(item.id)}
            open={openedItem === item.id}
            key={item.id}
            text={item.text}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
}
