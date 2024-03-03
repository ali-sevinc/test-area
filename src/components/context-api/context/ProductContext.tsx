import { ReactNode, createContext, useContext, useReducer } from "react";

export type ProductType = {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
};
type InitialType = {
  products: ProductType[];
  toggleFav: (id: string) => void;
};

type Action = {
  type: string;
  productId: string;
};

export const TOGGLE_FAV = "TOGGLE_FAV";
const initialState: InitialType = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
  toggleFav: () => {},
};

const ProductContext = createContext(initialState);

function reducer(state: InitialType, action: Action) {
  if (action.type === TOGGLE_FAV) {
    const prodIndex = state.products.findIndex(
      (p) => p.id === action.productId
    );
    const newFavStatus = !state.products[prodIndex].isFavorite;
    const updatedProducts = [...state.products];
    updatedProducts[prodIndex] = {
      ...state.products[prodIndex],
      isFavorite: newFavStatus,
    };
    return {
      ...state,
      products: updatedProducts,
    };
  }
  return state;
}

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  function toggleFav(id: string) {
    dispatch({ type: TOGGLE_FAV, productId: id });
  }

  return (
    <ProductContext.Provider value={{ products, toggleFav }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("Context used on outside of scope.");
  return context;
}
