import TextItem from "./TextItem";

type Text = {
  id: string;
  text: string;
  isExpanded?: boolean;
  maxLetter?: number;
  color?: string;
  btnMessages?: [string, string] | undefined;
};
const DUMMY_TEXTS: Text[] = [
  {
    id: "t1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed eu nunc tristique, varius massa et, blandit ligula. Integer non metus vel elit venenatis facilisis. Phasellus ac justo eget felis fermentum fermentum. Proin consectetur, elit eget consectetur consectetur, nisl ex suscipit elit, a posuere justo augue vel orci. Curabitur sit amet metus eget eros dignissim hendrerit ac id sem.",
    maxLetter: 120,
    isExpanded: false,
    color: "red",
    btnMessages: ["show less", "show all"],
  },
  {
    id: "t2",
    text: "Curabitur sit amet metus eget eros dignissim hendrerit ac id sem. Duis congue odio et est eleifend, ut ultrices velit sollicitudin. Fusce ut aliquet libero. Phasellus ac justo eget felis fermentum fermentum. Proin consectetur, elit eget consectetur consectetur, nisl ex suscipit elit, a posuere justo augue vel orci. Curabitur sit amet metus eget eros dignissim hendrerit ac id sem.",
    maxLetter: 80,
    isExpanded: true,
    btnMessages: ["◀", "▶"],
  },
  {
    id: "t3",
    text: "Phasellus ac justo eget felis fermentum fermentum. Proin consectetur, elit eget consectetur consectetur, nisl ex suscipit elit, a posuere justo augue vel orci. Curabitur sit amet metus eget eros dignissim hendrerit ac id sem.",
    maxLetter: 150,
    isExpanded: true,
    color: "purple",
  },
];

export default function TextExpander() {
  return (
    <div className="flex flex-col gap-4 mt-12">
      {DUMMY_TEXTS.map((text) => (
        <TextItem
          key={text.id}
          text={text.text}
          maxLetter={text.maxLetter}
          isExpanded={text.isExpanded}
          color={text.color ? text.color : ""}
          btnMessages={text.btnMessages ? text.btnMessages : undefined}
        />
      ))}
    </div>
  );
}
