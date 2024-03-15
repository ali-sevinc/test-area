import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DICES = [
  {
    id: 4,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d4_blank.png",
    alt: "4 sided dice",
  },
  {
    id: 6,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d6_blank.png",
    alt: "6 sided dice",
  },
  {
    id: 8,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d8_blank.png",
    alt: "8 sided dice",
  },
  {
    id: 10,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d10_blank.png",
    alt: "10 sided dice",
  },
  {
    id: 12,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d12_blank.png",
    alt: "12 sided dice",
  },
  {
    id: 20,
    src: "https://www.google.com/logos/fnbx/polyhedral_dice/d20_blank.png",
    alt: "20 sided dice",
  },
];

function rollDice(max: number) {
  const rolled = Math.floor(Math.random() * max) + 1;
  return rolled;
}

type SelectedDice = {
  id: number;
  src: string;
  max: number;
  roll: number;
};
export default function Dice() {
  const [selectedDices, setSelectedDices] = useState<SelectedDice[]>([]);
  const [bonus, setBonus] = useState(0);

  function handleSelectDices(dice: { src: string; max: number }) {
    if (selectedDices.length >= 3) return;
    const newDice = { ...dice, id: Math.random(), roll: rollDice(dice.max) };
    setSelectedDices((cur) => [...cur, newDice]);
  }

  function handleRemoveDice(id: number) {
    setSelectedDices((cur) => cur.filter((dice) => dice.id !== id));
  }

  function handleRoll() {
    if (!selectedDices.length) return;
    setSelectedDices((cur) =>
      cur.map((dice) => ({
        ...dice,
        roll: rollDice(dice.max),
      }))
    );
  }

  const totalRolls = selectedDices.reduce(
    (cur, dice) => cur + dice.roll,
    bonus
  );

  return (
    <div className="w-[48rem] mt-8 mx-auto bg-stone-700 h-[32rem] border-2 border-stone-800">
      <h1 className="text-2xl text-stone-100 text-center py-1">Roll dice</h1>
      <div className="w-full h-4/6 bg-stone-100 flex items-center justify-center relative">
        <AnimatePresence>
          {!selectedDices.length && (
            <motion.p
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: [1, 0] }}
              className="text-xl font-semibold"
            >
              Select a dice below to roll
            </motion.p>
          )}
          {selectedDices.map((dice) => (
            <motion.button
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: [1, 0] }}
              onClick={() => handleRemoveDice(dice.id)}
              key={dice.id}
              className="relative"
            >
              <img src={dice.src} alt={dice.max + " sided dice"} />
              <div className="absolute inset-0 text-4xl top-[50%] -translate-y-6 text-stone-100 font-bold">
                {dice.roll}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
        <p className="absolute bottom-4 text-3xl font-semibold right-8">
          <span>Total: </span>
          <span>{totalRolls}</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {DICES.map((dice) => (
          <button
            key={dice.id}
            className="relative"
            onClick={() => handleSelectDices({ max: dice.id, src: dice.src })}
          >
            <img className="w-12" src={dice.src} alt={dice.alt} />
            <div className="absolute inset-0 top-3 text-base font-semibold text-stone-100">
              {dice.id}
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handleRoll}
          className="bg-sky-500 px-4 py-1 text-xl rounded-lg text-stone-100 hover:bg-sky-600"
        >
          Roll
        </button>
        <p>
          <label
            htmlFor="bonus-handicap"
            className="text-stone-100 font-semibold"
          >
            B/H(+/-):{" "}
          </label>
          <input
            onChange={(e) => setBonus(+e.target.value)}
            id="bonus-handicap"
            type="number"
            className="w-16 pl-2"
          />
        </p>
      </div>
    </div>
  );
}
