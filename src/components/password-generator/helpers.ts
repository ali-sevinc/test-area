export const DATAS = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "1234567890".split(""),
  symbols: "!@#$%^&*()-_=+[]{}|;:'.<>?".split(""),
};
export function selectCharacter(charArray: string[]) {
  const charIndex = Math.floor(Math.random() * charArray.length);
  return charArray[charIndex];
}

type PasswordDiffType = {
  length: number;
  number: boolean;
  uppercase: boolean;
  symbol: boolean;
};
type Difficulty = "extra-weak" | "weak" | "normal" | "strong" | "extra-strong";
export function handlePasswordDiff({
  length,
  number,
  uppercase,
  symbol,
}: PasswordDiffType) {
  let passworDifficulty: Difficulty = "extra-weak";

  if (
    (length >= 6 && number) ||
    (length >= 6 && uppercase) ||
    (length >= 6 && symbol) ||
    length >= 10
  ) {
    passworDifficulty = "weak";
  }

  if (
    (length >= 10 && number && uppercase) ||
    length > 12 ||
    (number && uppercase && symbol) ||
    (length >= 8 &&
      ((number && uppercase) || (number && symbol) || (symbol && uppercase)))
  ) {
    passworDifficulty = "normal";
  }

  if (
    (length > 12 && number && uppercase && symbol) ||
    (length > 12 && number) ||
    (length > 12 && uppercase) ||
    (length > 12 && symbol) ||
    (length >= 8 && number && uppercase && symbol)
  ) {
    passworDifficulty = "strong";
  }

  if (length > 12 && number && uppercase && symbol) {
    passworDifficulty = "extra-strong";
  }

  return passworDifficulty;
}
