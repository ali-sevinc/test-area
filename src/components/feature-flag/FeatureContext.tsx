import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import fetchFeaturesFlags from "./data";

type InitialType = {
  showCCPMenu: boolean;
  showQrcode: boolean;
  showTheme: boolean;
  showTicTacToe: boolean;
};
const initialState: InitialType = {
  showCCPMenu: false,
  showQrcode: false,
  showTheme: false,
  showTicTacToe: false,
};
const FeatureFlagContext = createContext(initialState);

type PropsType = { children: ReactNode };
export default function FeatureFlagsProvider({ children }: PropsType) {
  const [flags, setFlags] = useState<InitialType>(initialState);

  useEffect(function () {
    async function fetchData() {
      const res = (await fetchFeaturesFlags()) as InitialType;

      setFlags(res);
    }
    fetchData();
  }, []);

  console.log(flags);
  const value: InitialType = {
    showCCPMenu: flags?.showCCPMenu,
    showQrcode: flags?.showQrcode,
    showTheme: flags?.showTheme,
    showTicTacToe: flags?.showTicTacToe,
  };
  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureContext() {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error("Feature context used on outside of context scope.");
  }
  return context;
}
