type PropsType = {
  onReset: () => void;
  whoWin: "draw" | "pcWin" | "userWin";
  player: JSX.Element;
  pc: JSX.Element;
};
export default function FinishScreen({
  onReset,
  whoWin,
  player,
  pc,
}: PropsType) {
  return (
    <>
      <div
        onClick={onReset}
        className="fixed top-0 left-0 w-full h-full bg-stone-800/90"
      />
      <dialog
        open
        className="max-w-72  w-full p-8 text-center flex flex-col gap-4 items-center"
      >
        <h2 className="text-4xl font-semibold tracking-widest">
          {whoWin === "draw" && "Draw"}
          {whoWin === "pcWin" && "You Lost"}
          {whoWin === "userWin" && "You Win"}
        </h2>
        <p className="flex gap-4 items-center">
          You selected:{" "}
          <b className="text-4xl border-2 border-stone-700 rounded-full p-2">
            {player}
          </b>
        </p>
        <p className="flex gap-4 items-center">
          PC selected:{" "}
          <b className="text-4xl border-2 border-stone-700 rounded-full p-2">
            {pc}
          </b>
        </p>
        <button
          className="border px-4 py-2 bg-stone-600 text-stone-50"
          onClick={onReset}
        >
          Restart
        </button>
      </dialog>
    </>
  );
}
