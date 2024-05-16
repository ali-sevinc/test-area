import Menus from "../menu-ccp/Menus";
import FeatureFlagsProvider, { useFeatureContext } from "./FeatureContext";
import QRCodeGenerator from "../qrcode/QRCode";
import Theme from "../theme-change/Theme";
import TicTacToe from "../tic-tac-toe/TicTacToe";

function Flags() {
  const { showCCPMenu, showQrcode, showTheme, showTicTacToe } =
    useFeatureContext();

  return (
    <div className="mx-auto flex max-w-xl flex-col text-center">
      {showCCPMenu && (
        <div className="bg-zinc-200 px-4 py-2 text-zinc-900">
          <Menus>
            <Menus.Toggle id="featured-1">Open Menu 1</Menus.Toggle>
            <Menus.Menu id="featured-1">
              <Menus.Item>Item-1</Menus.Item>
              <Menus.Item>Item-2</Menus.Item>
              <Menus.Item>Item-3</Menus.Item>
            </Menus.Menu>
            <Menus.Toggle id="featured-2">Open Menu 2</Menus.Toggle>
            <Menus.Menu id="featured-2">
              <Menus.Item>Item-1</Menus.Item>
              <Menus.Item>Item-2</Menus.Item>
              <Menus.Item>Item-3</Menus.Item>
            </Menus.Menu>
          </Menus>
        </div>
      )}

      {showQrcode && (
        <>
          <h2>QRCode</h2>
          <QRCodeGenerator />
        </>
      )}

      {showTheme && (
        <>
          <Theme />
        </>
      )}

      {showTicTacToe && (
        <>
          <TicTacToe />
        </>
      )}
    </div>
  );
}
export default function FeatureFlags() {
  return (
    <FeatureFlagsProvider>
      <Flags />
    </FeatureFlagsProvider>
  );
}
