import { useEffect, useState } from "react";
import "./styles.css";

import { HiClipboard, HiCheck } from "react-icons/hi2";

import { DATAS, handlePasswordDiff, selectCharacter } from "./helpers";

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [isNumberIncluded, setIsNumberIncluded] = useState(0);
  const [isUppercaseIncluded, setIsUppercaseIncluded] = useState(0);
  const [isSymbolsIncluded, setIsSymbolsIncluded] = useState(0);

  const [password, setPassword] = useState("");
  const [isCoppied, setIsCoppied] = useState(false);

  const passworDifficulty = handlePasswordDiff({
    length: passwordLength,
    number: isNumberIncluded === 1,
    uppercase: isUppercaseIncluded === 1,
    symbol: isSymbolsIncluded === 1,
  });

  function handleGenerate() {
    let newPassword = "";

    //BASIC
    if (!isNumberIncluded && !isUppercaseIncluded && !isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        newPassword += selectCharacter(DATAS.letters);
      }
    }

    //ONLY ONE INCLUDED
    //only uppercase included
    if (!isNumberIncluded && isUppercaseIncluded && !isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.5) {
          newPassword += selectCharacter(DATAS.letters);
        } else {
          newPassword += selectCharacter(DATAS.letters).toUpperCase();
        }
      }
    }
    //only number included
    if (isNumberIncluded && !isUppercaseIncluded && !isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.5) {
          newPassword += selectCharacter(DATAS.letters);
        } else {
          newPassword += selectCharacter(DATAS.numbers);
        }
      }
    }
    //only symbols included
    if (!isNumberIncluded && !isUppercaseIncluded && isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.5) {
          newPassword += selectCharacter(DATAS.letters);
        } else {
          newPassword += selectCharacter(DATAS.symbols);
        }
      }
    }

    //TWO INCLUDED
    //number and uppercase included
    if (isNumberIncluded && isUppercaseIncluded && !isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.33) {
          newPassword += selectCharacter(DATAS.letters);
        } else if (rolled >= 0.33 && rolled < 0.66) {
          newPassword += selectCharacter(DATAS.letters).toUpperCase();
        } else {
          newPassword += selectCharacter(DATAS.numbers);
        }
      }
    }

    //uppercase amd symbols included
    if (!isNumberIncluded && isUppercaseIncluded && isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.33) {
          newPassword += selectCharacter(DATAS.letters);
        } else if (rolled >= 0.33 && rolled < 0.66) {
          newPassword += selectCharacter(DATAS.letters).toUpperCase();
        } else {
          newPassword += selectCharacter(DATAS.symbols);
        }
      }
    }
    //number and symbols included
    if (isNumberIncluded && !isUppercaseIncluded && isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled < 0.33) {
          newPassword += selectCharacter(DATAS.letters);
        } else if (rolled >= 0.33 && rolled < 0.66) {
          newPassword += selectCharacter(DATAS.numbers);
        } else {
          newPassword += selectCharacter(DATAS.symbols);
        }
      }
    }

    //ALL INCLUDED
    if (isNumberIncluded && isUppercaseIncluded && isSymbolsIncluded) {
      for (let i = 0; i < passwordLength; i++) {
        const rolled = Math.random();
        if (rolled >= 0 && rolled < 0.25) {
          newPassword += selectCharacter(DATAS.letters);
        } else if (rolled >= 0.25 && rolled < 0.5) {
          newPassword += selectCharacter(DATAS.letters).toUpperCase();
        } else if (rolled >= 0.5 && rolled < 0.75) {
          newPassword += selectCharacter(DATAS.numbers);
        } else if (rolled >= 0.75 && rolled <= 1) {
          newPassword += selectCharacter(DATAS.symbols);
        }
      }
    }

    setPassword(newPassword);
    setIsCoppied(false);
  }

  function handleCopy() {
    setIsCoppied(true);
    navigator.clipboard.writeText(password);
  }

  useEffect(
    function () {
      const timer = setTimeout(() => {
        setIsCoppied(false);
      }, 3000);
      return () => clearTimeout(timer);
    },
    [isCoppied]
  );

  return (
    <div className="bg-stone-600 h-screen  pt-24 ">
      <div className="w-[24rem] flex flex-col gap-4 relative text-stone-100 mx-auto bg-stone-800 px-12 py-8">
        {isCoppied && (
          <p className="absolute top-0 left-0 w-full text-center  bg-green-500">
            Coppied
          </p>
        )}
        <h1 className="text-xl text-center">Password Generator</h1>
        <div className="bg-stone-600 flex justify-between px-4 py-2 text-xl">
          <p>{password || "Generate a password"}</p>
          {!isCoppied && (
            <button
              onClick={handleCopy}
              className="disabled:cursor-not-allowed"
              disabled={password === ""}
            >
              <HiClipboard />
            </button>
          )}
          {isCoppied && (
            <button className="text-green-500">
              <HiCheck />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label>Password Length</label>
            <p>{passwordLength}</p>
          </div>
          <input
            className="range"
            max={16}
            min={6}
            value={passwordLength}
            type="range"
            onChange={(e) => setPasswordLength(+e.target.value)}
          />
        </div>
        <div className="flex items-center gap-8">
          <input
            type="checkbox"
            value={isNumberIncluded}
            onChange={() => setIsNumberIncluded((cur) => (cur === 1 ? 0 : 1))}
            id="number"
          />
          <label htmlFor="number">Include Number</label>
        </div>
        <div className="flex items-center gap-8">
          <input
            type="checkbox"
            value={isUppercaseIncluded}
            onChange={() =>
              setIsUppercaseIncluded((cur) => (cur === 1 ? 0 : 1))
            }
            id="uppercase"
          />
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>
        <div className="flex items-center gap-8">
          <input
            type="checkbox"
            value={isSymbolsIncluded}
            onChange={() => setIsSymbolsIncluded((cur) => (cur === 1 ? 0 : 1))}
            id="symbol"
          />
          <label htmlFor="symbol">Include Symbols</label>
        </div>
        <div className="bg-stone-600 flex justify-between px-4 py-2 text-xl">
          {passworDifficulty === "extra-weak" && (
            <p className="text-red-600">Extra Weak</p>
          )}
          {passworDifficulty === "weak" && <p className="text-red-300">Weak</p>}
          {passworDifficulty === "normal" && (
            <p className="text-stone-100">Normal</p>
          )}
          {passworDifficulty === "strong" && (
            <p className="text-green-300">Strong</p>
          )}
          {passworDifficulty === "extra-strong" && (
            <p className="text-green-600">Extra Strong</p>
          )}
        </div>
        <div className="text-center">
          <button
            onClick={handleGenerate}
            className="inline-block w-full bg-stone-100 text-stone-800 font-bold text-lg py-1 hover:bg-stone-300"
          >
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
}
