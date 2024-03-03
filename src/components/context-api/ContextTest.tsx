import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import ProductProvider from "./context/ProductContext";
export default function ContextTest() {
  return (
    <ProductProvider>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ProductProvider>
  );
}
