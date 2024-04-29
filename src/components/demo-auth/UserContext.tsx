import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

type UserType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  age: number;
  height: number;
  weight: number;
  phone: string;
  address: {
    city: string;
    address: string;
  };
  hair: { color: string };
  bloodGroup: string;
};
type StateType = {
  user: null | UserType;
  isAuth: boolean;
  onLogin: (user: UserType) => void;
  onLogout: () => void;
};
type ActionType = {
  type: "login" | "logout";
  payload?: UserType;
};

const initialState: StateType = {
  user: null,
  isAuth: false,
  onLogin: () => {},
  onLogout: () => {},
};

const UserContext = createContext(initialState);

function reducer(state: StateType, action: ActionType) {
  if (action.type === "login") {
    return { ...state, user: action.payload, isAuth: true } as StateType;
  }
  if (action.type === "logout") {
    return { ...state, user: null, isAuth: false };
  }

  return state;
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  const handleLogin = useCallback(function handleLogin(user: UserType) {
    dispatch({ type: "login", payload: user });
  }, []);

  const handleLogout = useCallback(function handleLogout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("demo-auth-token");
  }, []);

  return (
    <UserContext.Provider
      value={{ user, onLogin: handleLogin, onLogout: handleLogout, isAuth }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext used outside of provider scope.");
  return context;
}
