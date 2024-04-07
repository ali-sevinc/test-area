import { FormEvent, useState } from "react";
import styles from "./CartScreen.module.css";

const CART_NUMBER_LENGTH = 16;
function formatCartNumber(cardNumber: string) {
  const cartArray = cardNumber.split("");
  const formatted = Array.from({ length: CART_NUMBER_LENGTH }, (_, i) =>
    cartArray?.[i] ? cartArray[i] : "-",
  );
  for (let i = 4; i < CART_NUMBER_LENGTH; i += 5) {
    formatted.splice(i, 0, " ");
  }

  return formatted;
}

type IdentifierType = "cardNumber" | "ownerName" | "cvc" | "month" | "year";
type ChangeHandlerType = {
  identifier: IdentifierType;
  value: string;
};

type ErrorType = {
  cardNumber: boolean;
  ownerName: boolean;
  cvc: boolean;
  month: boolean;
  year: boolean;
};
type CardInformationType = {
  cardNumber: string;
  ownerName: string;
  cvc: string;
  month: string;
  year: string;
};
const initialErrorState: ErrorType = {
  cardNumber: false,
  ownerName: false,
  cvc: false,
  month: false,
  year: false,
};
const initialCartState: CardInformationType = {
  cardNumber: "",
  ownerName: "",
  cvc: "",
  month: "01",
  year: "24",
};

export default function CartScreen() {
  const [cardInformations, setCardInformations] =
    useState<CardInformationType>(initialCartState);

  const [errors, setErrors] = useState<ErrorType>(initialErrorState);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const number = formatCartNumber(cardInformations.cardNumber);

  function handleChange({ identifier, value }: ChangeHandlerType) {
    if (identifier === "cardNumber" && value?.length > 16) return;
    if (identifier === "cvc" && value?.length > 3) return;

    setCardInformations((cur) => ({ ...cur, [identifier]: value }));
    setErrors(initialErrorState);
  }

  function handleError(identifier: IdentifierType) {
    setErrors((cur) => ({ ...cur, [identifier]: true }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let error: boolean = false;
    const number = cardInformations.cardNumber;
    const name = cardInformations.ownerName;
    const month = cardInformations.month;
    const year = cardInformations.year;
    const cvc = cardInformations.cvc;

    if (isNaN(+number) || number?.trim().length !== 16) {
      handleError("cardNumber");
      error = true;
    }
    if (name.trim()?.length < 3) {
      handleError("ownerName");
      error = true;
    }
    if (!month) {
      handleError("month");
      error = true;
    }

    if (!year) {
      handleError("year");
      error = true;
    }
    if (isNaN(+cvc) || cvc.trim()?.length !== 3) {
      handleError("cvc");
      error = true;
    }

    if (error) return;

    console.log(cardInformations);
    setIsSuccess(true);
  }

  function handleReset() {
    setCardInformations(initialCartState);
    setErrors(initialErrorState);
    setIsSuccess(false);
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-violet-950 via-purple-600 to-violet-900 py-4 md:py-20 ${styles.container}`}
    >
      <div className=" mx-1 flex max-w-xl flex-col sm:mx-auto md:grid md:max-w-6xl md:grid-cols-[35%,1fr] ">
        <div className="relative flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-purple-900 via-violet-900 to-violet-800  py-4 md:min-h-[80vh] md:gap-10 md:py-0">
          <div className="order-2 flex h-44 w-80 -translate-x-4 -translate-y-20 flex-col items-center  justify-end gap-1 rounded-xl bg-gradient-to-br from-violet-950 via-purple-700 to-violet-900 px-10 pb-4 sm:-translate-x-12 md:order-1 md:-translate-y-0 md:translate-x-[10%] lg:translate-x-[40%]">
            <h2 className="pb-8 text-2xl font-semibold text-stone-50">
              Demo Bank
            </h2>
            <p className="text-xl tracking-[0.15rem]  text-stone-50">
              {number}
            </p>
            <div className="flex w-full items-center justify-between px-1 text-sm  text-stone-50  ">
              <p className="uppercase ">{cardInformations.ownerName}</p>
              <p>
                {cardInformations.month}/{cardInformations.year}
              </p>
            </div>
          </div>

          <div className="order-1 flex h-44 w-80 flex-col items-center justify-between gap-1 rounded-xl bg-stone-300 pb-8 pt-4 md:order-2 md:translate-x-[20%]  lg:translate-x-[60%]">
            <div className="h-10 w-full bg-stone-600"></div>
            <div className="flex h-8 w-full items-center justify-end bg-stone-100 px-1  ">
              <p>{cardInformations.cvc}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="h-2 w-24 bg-stone-100"></p>
              <p className="h-2 w-24 bg-stone-100"></p>
              <p className="h-2 w-24 bg-stone-100"></p>
            </div>
          </div>
        </div>
        {isSuccess && (
          <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 bg-stone-50 pb-20 pt-10 md:min-h-[80vh]">
            <h2 className="text-2xl font-semibold">Success</h2>
            <p className="rounded-full bg-violet-700 px-3 py-4 text-4xl">✔</p>
            <p>Your card informations was successfully saved.</p>
            <button
              className="w-80 rounded border bg-violet-700 py-2 text-xl font-semibold text-stone-50 duration-200 hover:bg-violet-800"
              onClick={handleReset}
            >
              Continue
            </button>
          </div>
        )}
        {!isSuccess && (
          <form
            onSubmit={handleSubmit}
            className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 bg-stone-50 pb-20 pt-10 md:min-h-[80vh]"
          >
            <InputGroup
              id="cart-number"
              identifier="cardNumber"
              value={cardInformations.cardNumber}
              onChange={handleChange}
              type="number"
              label="Cart Number"
              placehoder="E.G. 0000 0000 0000 0000"
              error={errors.cardNumber}
            />

            <InputGroup
              id="owner-name"
              identifier="ownerName"
              value={cardInformations.ownerName}
              onChange={handleChange}
              type="text"
              label="Owner Name"
              placehoder="E.G. ALI"
              error={errors.ownerName}
            />
            <div className="flex w-80 justify-between gap-4">
              <div className="flex flex-col">
                <label className="text-xl" htmlFor="month">
                  Exp. Date (MM/YY)
                </label>
                <div className="flex gap-1">
                  <select
                    value={cardInformations.month}
                    onChange={(e) =>
                      setCardInformations((cur) => ({
                        ...cur,
                        month: e.target.value,
                      }))
                    }
                    className={`w-20 border focus:outline-none ${
                      errors.month ? "border-red-500" : ""
                    } rounded-sm px-4 py-2 text-xl uppercase tracking-widest`}
                  >
                    {Array.from({ length: 12 }, (_, i) =>
                      i < 9 ? "0" + (i + 1) : i + 1,
                    ).map((j) => (
                      <option value={j} key={j}>
                        {j}
                      </option>
                    ))}
                  </select>
                  <select
                    value={cardInformations.year}
                    onChange={(e) =>
                      setCardInformations((cur) => ({
                        ...cur,
                        year: e.target.value,
                      }))
                    }
                    className={`w-20 border focus:outline-none ${
                      errors.year ? "border-red-500" : ""
                    } rounded-sm px-4 py-2 text-xl uppercase tracking-widest`}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 24).map((j) => (
                      <option key={j} value={j}>
                        {j}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xl" htmlFor="cvc">
                  CVC
                </label>
                <input
                  value={cardInformations.cvc}
                  onChange={(e) =>
                    handleChange({ identifier: "cvc", value: e.target.value })
                  }
                  id="cvc"
                  placeholder="e.g. 123"
                  type="number"
                  className={`w-32 border focus:outline-none ${
                    errors.cvc ? "border-red-500" : ""
                  } rounded-sm px-4 py-2 text-xl uppercase tracking-widest`}
                />
              </div>
            </div>
            <button className="w-80 rounded border bg-violet-700 py-2 text-xl font-semibold text-stone-50 duration-200 hover:bg-violet-800">
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

type PropsType = {
  value: string;
  label: string;
  id: string;
  type: "number" | "text";
  identifier: IdentifierType;
  placehoder: string;
  error: boolean;
  onChange: ({
    identifier,
    value,
  }: {
    identifier: IdentifierType;
    value: string;
  }) => void;
};
function InputGroup({
  id,
  onChange,
  type,
  value,
  identifier,
  label,
  placehoder,
  error,
}: PropsType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placehoder}
        onChange={(e) =>
          onChange({
            identifier,
            value: e.target.value,
          })
        }
        className={`border focus:outline-none ${
          error ? "border-red-500" : ""
        } w-80 appearance-none rounded-sm px-4 py-2 text-xl uppercase tracking-widest`}
      />
    </div>
  );
}
