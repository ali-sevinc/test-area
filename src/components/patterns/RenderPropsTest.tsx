import RenderProps from "./RenderProps";

const ITEMS = [
  { id: "i1", title: "render props item 1" },
  { id: "i2", title: "this is an awesome pattern" },
  { id: "i3", title: "it's bit hard but usefull" },
];

export default function RenderPropsTest() {
  return (
    <div className="mx-auto mt-12 flex w-[24rem] flex-col gap-8 bg-stone-100 py-4 text-center">
      <h2 className="text-center text-lg font-bold">Render Props Pattern</h2>
      <div className="bg-stone-200 py-4">
        <RenderProps
          items={["item-1", "item-2", "item-3"]}
          itemKeyFn={(item) => item}
        >
          {(item) => item}
        </RenderProps>
      </div>

      <div className="bg-stone-200 py-4">
        <RenderProps items={ITEMS} itemKeyFn={(item) => item.id}>
          {(item) => (
            <div>
              <h2>{item.title}</h2>
            </div>
          )}
        </RenderProps>
      </div>
    </div>
  );
}
