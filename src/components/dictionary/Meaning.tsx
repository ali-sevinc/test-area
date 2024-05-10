type PropsType = {
  data: { definitions: { definition: string; example?: string }[] };
};
export default function Meaning({ data }: PropsType) {
  return (
    <div className="py-2">
      <p className="text-zinc-400 italic text-xl pb-2">Meaning</p>
      <ul className="flex flex-col gap-4 list-disc pl-4 text-lg">
        {data.definitions.map((def) => (
          <li key={def.definition}>
            <p>{def.definition}</p>
            {def?.example && <p className="italic">-{def.example}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
