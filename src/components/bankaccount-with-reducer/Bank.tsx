import { FormEvent, useReducer, useRef } from "react";
import InputGrop from "./InputGrop";
import Button from "./Button";

type InitialType = {
  user: string;
  balance: number;
  loan: number;
  error: string;
};
type ActionType = {
  type:
    | "open-account"
    | "close-account"
    | "requestloan"
    | "payloan"
    | "withdraw"
    | "deposit"
    | "error";
  payload?: { amount?: number; name?: string; error?: string };
};
const initialState: InitialType = {
  user: "",
  balance: 0,
  loan: 0,
  error: "",
};

function reducer(state: InitialType, action: ActionType) {
  if (action.type === "open-account") {
    return {
      ...state,
      user: action.payload?.name,
      balance: 500,
      error: "",
    } as InitialType;
  }
  if (action.type === "close-account") {
    if (state.loan > 0 || state.balance < 0) return state as InitialType;
    return {
      ...state,
      user: "",
      balance: 0,
      error: "",
    } as InitialType;
  }
  if (action.type === "requestloan") {
    if (state.loan > 0) return state;
    return {
      ...state,
      loan: 10000,
      balance: state.balance + 10000,
      error: "",
    } as InitialType;
  }
  if (action.type === "payloan") {
    if (state.loan === 0) return state;

    return {
      ...state,
      loan: 0,
      balance: state.balance - 10000,
      error: "",
    } as InitialType;
  }
  if (action.type === "withdraw") {
    return {
      ...state,
      balance: state.balance - (action.payload?.amount ?? 0),
      error: "",
    } as InitialType;
  }
  if (action.type === "deposit") {
    return {
      ...state,
      balance: state.balance + (action.payload?.amount ?? 0),
      error: "",
    } as InitialType;
  }
  if (action.type === "error") {
    return {
      ...state,
      error: action.payload?.error,
    } as InitialType;
  }

  return state;
}

export default function Bank() {
  const [{ balance, loan, user, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const depositRef = useRef<HTMLInputElement>(null);
  const withdrawltRef = useRef<HTMLInputElement>(null);

  function handleCreateUser(event: FormEvent) {
    event.preventDefault();
    const form = new FormData(event.currentTarget as HTMLFormElement);

    const name = form.get("user") as string;
    if (!name) {
      dispatch({ type: "error", payload: { error: "Account connot created" } });
      return;
    }

    dispatch({ type: "open-account", payload: { name, error: "" } });
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-800 to-blue-500 pt-24">
      <div className="mx-auto max-w-[44rem] rounded-xl bg-sky-600 p-8 text-stone-50">
        <h1 className="mb-8 text-center text-2xl">Welcome to Reducer Bank</h1>
        {!user && (
          <form
            onSubmit={handleCreateUser}
            className="flex flex-col items-center gap-4 text-center"
          >
            <p className="flex flex-col items-center">
              <label htmlFor="user">User Name</label>
              <input
                id="user"
                type="text"
                name="user"
                className="rounded-xl px-4 py-2 font-semibold text-stone-800"
              />
            </p>

            <Button onClick={() => {}}>Open Account</Button>
            {error && (
              <p className="text-center text-sm text-red-400">{error}</p>
            )}
          </form>
        )}
        {user !== "" && (
          <div>
            <div className="flex items-center justify-around text-xl">
              <h2>
                Welcome, <b className="uppercase">{user}</b>
              </h2>
              <p>
                <span>Balance: </span> <b>${balance.toFixed(2)}</b>
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-8">
              <InputGrop
                ref={depositRef}
                error={error === "deposit"}
                name="deposit"
                placeholder="Deposit..."
                onClick={() => {
                  const deposit = depositRef.current?.value;
                  if (!deposit) {
                    dispatch({ type: "error", payload: { error: "deposit" } });
                    return;
                  }
                  dispatch({
                    type: "deposit",
                    payload: { amount: +deposit, error: "" },
                  });
                  depositRef.current.value = "";
                }}
              >
                Deposit
              </InputGrop>

              <InputGrop
                ref={withdrawltRef}
                error={error === "withdrawl"}
                name="withdrawl"
                onClick={() => {
                  const withdrawl = withdrawltRef.current?.value;
                  if (!withdrawl) {
                    dispatch({
                      type: "error",
                      payload: { error: "withdrawl" },
                    });
                    return;
                  }
                  dispatch({
                    type: "withdraw",
                    payload: { amount: +withdrawl, error: "" },
                  });
                  withdrawltRef.current.value = "";
                }}
                placeholder="Withdrawl..."
              >
                Withdrawl
              </InputGrop>

              <p className="text-center">
                {loan > 0 && (
                  <Button onClick={() => dispatch({ type: "payloan" })}>
                    Pay Loan
                  </Button>
                )}
                {loan === 0 && (
                  <Button onClick={() => dispatch({ type: "requestloan" })}>
                    Request Loan ($10000)
                  </Button>
                )}
              </p>
              <p className="text-end">
                <Button
                  disabled={loan > 0 || balance < 0}
                  onClick={() => dispatch({ type: "close-account" })}
                >
                  Close Account
                </Button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
