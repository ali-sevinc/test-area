import Menus from "../menu-ccp/Menus";
import { useFeatureContext } from "./FeatureContext";
import QRCodeGenerator from "../qrcode/QRCode";
import Theme from "../theme-change/Theme";
import TicTacToe from "../tic-tac-toe/TicTacToe";

export default function FeatureFlags() {
  const { showCCPMenu, showQrcode, showTheme, showTicTacToe } =
    useFeatureContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "480px",
        margin: "0 auto",
      }}
    >
      {showCCPMenu && (
        <>
          <h2>CCP MENU</h2>
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
        </>
      )}

      {showQrcode && (
        <>
          <h2>QRCode</h2>
          <QRCodeGenerator />
        </>
      )}

      {showTheme && (
        <>
          <h2>Theme</h2>
          <Theme />
        </>
      )}

      {showTicTacToe && (
        <>
          <h2>Tic Tac Toe</h2>
          <TicTacToe />
        </>
      )}
    </div>
  );
}