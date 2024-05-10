import Meaning from "./Meaning";
import Message from "./Message";

type ResultType = {
  result: {
    word: string;
    phonetic: string;
    meanings: {
      partOfSpeech: "noun" | "verb";
      definitions: { definition: string }[];
    }[];
    sourceUrls: string[];
  };
};
export default function Result({ result }: ResultType) {
  const noun = result.meanings.find((part) => part.partOfSpeech === "noun");
  const verb = result.meanings.find((part) => part.partOfSpeech === "verb");

  return (
    <div className="max-w-2xl mx-auto text-start w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{result.word}</h2>
        <p className="text-pink-400 text-2xl">{result.phonetic}</p>

        <div className="flex gap-8 items-center">
          <p className="text-2xl">noun</p>
          <div className="w-full bg-zinc-400 h-0.5" />
        </div>
        {!noun && (
          <Message title="No Data" message={`"${result.word}" has no noun`} />
        )}
        {noun && <Meaning data={noun} />}
        <div className="flex gap-8 items-center">
          <p className="text-2xl">verb</p>
          <div className="w-full bg-zinc-400 h-0.5" />
        </div>
        {!verb && (
          <Message title="No Data" message={`"${result.word}" has no verb`} />
        )}
        {verb && <Meaning data={verb} />}
      </div>
      {result.sourceUrls.length > 0 && (
        <div className="flex items-center gap-1 py-8">
          <p>Source: </p>
          <a
            className="text-pink-400"
            href={result.sourceUrls[0]}
            target="_blank"
          >
            {result.sourceUrls[0]}
          </a>
        </div>
      )}
    </div>
  );
}
