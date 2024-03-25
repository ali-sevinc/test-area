type PropsType = { steps: { id: string; title: string }[]; step: number };
export default function Steps({ steps, step }: PropsType) {
  return (
    <div className="bg-blue-600 rounded-lg text-stone-50">
      <ul className=" py-8 flex md:flex-col justify-center">
        {steps.map((item, index) => (
          <li key={item.id} className="flex items-center gap-4 px-4 py-2">
            <p
              className={`border px-4 py-2 rounded-full ${
                step === index ? "bg-sky-200 text-stone-600" : ""
              }`}
            >
              {index + 1}
            </p>
            <div className="hidden md:block">
              <p className="text-stone-300">STEP {index + 1}</p>
              <h2 className="uppercase font-semibold">{item.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
