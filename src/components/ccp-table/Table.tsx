import { ReactNode, createContext, useContext } from "react";

const initialState = { columns: "" };
const TableContext = createContext(initialState);

type TableType = { children: ReactNode; columns: string };
export default function Table({ children, columns }: TableType) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border max-w-4xl text-emerald-50 mx-auto rounded-md md:text-2xl overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      style={{ gridTemplateColumns: columns }}
      className={`grid gap-8 items-center border-b px-4 py-1 bg-emerald-50 text-emerald-900`}
    >
      {children}
    </header>
  );
}
function Row({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className={`grid gap-8 items-center py-2`}
    >
      {children}
    </div>
  );
}
type BodyType<T> = { data: T[]; render: (value: T) => JSX.Element };
function Body<T>({ data, render }: BodyType<T>) {
  if (data.length === 0)
    return <p className="text-2xl  font-semibold text-center m-11">No data</p>;

  return (
    <div role="table" className="px-4 py-1 divide-y">
      {data.map(render)}
    </div>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="border-t mt-2 py-1 px-2 bg-emerald-50 text-emerald-950 text-center">
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
