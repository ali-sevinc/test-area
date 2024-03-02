import CCpattern from "./CCpattern";

export default function CCPContentTest() {
  return (
    <div className="mx-auto mt-12 flex w-[24rem] flex-col rounded-xl bg-stone-100 px-6 py-4">
      <h2 className="text-center text-lg font-bold">
        Compound Component Pattern
      </h2>
      <CCpattern>
        <div className="bg-stone-200">
          <CCpattern.Toggle id="item-1">Toggle List</CCpattern.Toggle>
          <CCpattern.Content id="item-1">
            <ul className="flex flex-col gap-1 bg-stone-300 px-4 py-2">
              <CCpattern.ContentItem>
                <li>item-1 from list</li>
              </CCpattern.ContentItem>
              <CCpattern.ContentItem>
                <li>item-2 from list</li>
              </CCpattern.ContentItem>
              <CCpattern.ContentItem>
                <li>item-3 from list</li>
              </CCpattern.ContentItem>
            </ul>
          </CCpattern.Content>
        </div>
        <div className="bg-stone-200">
          <CCpattern.Toggle id="item-2">Toggle Paragraph</CCpattern.Toggle>
          <div className="bg-stone-300">
            <CCpattern.Content id="item-2">
              <div className="my-2">
                <h2 className="text-center text-xl font-semibold">
                  Paragraph header
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  illum perferendis adipisci, dolore perspiciatis beatae ipsa
                  voluptatum maiores sapiente amet nemo iusto laboriosam
                  laudantium illo cumque aspernatur, libero voluptatem! Atque.
                </p>
              </div>
            </CCpattern.Content>
          </div>
        </div>

        <div className="bg-stone-200">
          <CCpattern.Toggle id="item-3">Toggle Form</CCpattern.Toggle>
          <CCpattern.Content id="item-3">
            <div className="relative bg-stone-300">
              <CCpattern.CloseFromOutside>
                <button className="absolute right-0 top-0">X</button>
              </CCpattern.CloseFromOutside>
              <form className="flex flex-col gap-1 px-2 py-4">
                <h2 className="text-center text-xl font-semibold">
                  Form Header
                </h2>
                <p className="my-4 flex justify-between px-4">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name..." />
                </p>
                <div className="my-2 flex justify-end gap-4">
                  <CCpattern.CloseFromOutside>
                    <button className="" type="button">
                      Close
                    </button>
                  </CCpattern.CloseFromOutside>
                  <button
                    className="bg-stone-600 px-2 py-1 text-stone-50"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </CCpattern.Content>
        </div>
      </CCpattern>
    </div>
  );
}
