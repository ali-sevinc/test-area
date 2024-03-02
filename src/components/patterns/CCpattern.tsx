import {
  MouseEvent,
  ReactNode,
  RefObject,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { useOutsideClick } from "../outside-click/useOutsideClick";

type CCPState = {
  openId: string;
  open: (id: string) => void;
  close: () => void;
};
const initialState: CCPState = {
  openId: "",
  open: () => {},
  close: () => {},
};
const CcpContext = createContext(initialState);

export default function CCpattern({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string>("");

  function open(id: string) {
    setOpenId(id);
  }
  function close() {
    setOpenId("");
  }

  return (
    <CcpContext.Provider value={{ openId, open, close }}>
      {children}
    </CcpContext.Provider>
  );
}

type ToggleType = { id: string; children: ReactNode };
function Toggle({ id, children }: ToggleType) {
  const { close, open, openId } = useContext(CcpContext);

  function handleToggle(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    if (openId === id) {
      close();
    } else {
      open(id);
    }
  }

  return <button onClick={handleToggle}>{children}</button>;
}

function Content({ id, children }: ToggleType) {
  const { openId, close } = useContext(CcpContext);
  const ref = useOutsideClick(close, false) as RefObject<HTMLDivElement>;

  if (id !== openId) return null;

  return <div ref={ref}>{children}</div>;
}

function ContentItem({ children }: { children: ReactNode }) {
  return children;
}

type CloseType = { children: JSX.Element };
function CloseFromOutside({ children }: CloseType) {
  const { close } = useContext(CcpContext);

  return cloneElement(children, { onClick: close });
}

CCpattern.Toggle = Toggle;
CCpattern.Content = Content;
CCpattern.ContentItem = ContentItem;
CCpattern.CloseFromOutside = CloseFromOutside;
