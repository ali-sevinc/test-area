import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

async function fakeDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

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

  const [animating, setAnimating] = useState(false);

  async function handleSelectDices(dice: { src: string; max: number }) {
    if (selectedDices.length >= 3) return;
    setAnimating(true);
    const newDice = { ...dice, id: Math.random(), roll: rollDice(dice.max) };
    setSelectedDices((cur) => [...cur, newDice]);
    await fakeDelay();
    setAnimating(false);
  }

  function handleRemoveDice(id: number) {
    setSelectedDices((cur) => cur.filter((dice) => dice.id !== id));
  }

  async function handleRoll() {
    if (!selectedDices.length) return;
    setAnimating(true);
    setSelectedDices((cur) =>
      cur.map((dice) => ({
        ...dice,
        roll: rollDice(dice.max),
      })),
    );
    await fakeDelay();
    setAnimating(false);
  }

  const totalRolls = selectedDices.reduce(
    (cur, dice) => cur + dice.roll,
    bonus,
  );

  return (
    <div className="mx-auto mt-8 h-[32rem] w-[48rem] border-2 border-stone-800 bg-stone-700">
      <h1 className="py-1 text-center text-2xl text-stone-100">Roll dice</h1>
      <div className="relative flex h-4/6 w-full items-center justify-center bg-stone-100">
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
              <img
                src={dice.src}
                alt={dice.max + " sided dice"}
                className={`${animating ? "animate-spin ease-in" : ""}`}
              />
              <div className="absolute inset-0 top-[50%] -translate-y-6 text-4xl font-bold text-stone-100">
                {!animating && dice.roll}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
        <p className="absolute bottom-4 right-8 text-3xl font-semibold">
          <span>Total: </span>
          {animating ? "0" : <span>{totalRolls}</span>}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
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
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={handleRoll}
          className="rounded-lg bg-sky-500 px-4 py-1 text-xl text-stone-100 hover:bg-sky-600"
        >
          Roll
        </button>
        <p>
          <label
            htmlFor="bonus-handicap"
            className="font-semibold text-stone-100"
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
