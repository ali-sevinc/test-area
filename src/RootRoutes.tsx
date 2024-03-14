import { createBrowserRouter, RouterProvider } from "react-router-dom";

//**** */
import HomePage from "./HomePage";

import Star from "./components/start-rating/Star";
import Slider from "./components/image-slider/Slider";
import LoadMoreButton from "./components/load-more/LoadMoreButton";
import Sidebar from "./components/menu-ccp/Sidebar";
import Menu from "./components/menu/Menu";
import QRCodeGenerator from "./components/qrcode/QRCode";
import Theme from "./components/theme-change/Theme";
import ScrollIndicator from "./components/scroll-tracker/ScrollIndicator";
import TabContent from "./components/tab-contents/TabContent";
import ModalContent from "./components/modal/ModalContent";
import SearchAutoComplete from "./components/search-autocomplete/SearchAutoComplete";
import CountriesPage from "./components/country-filter/CountryFilter";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlags from "./components/feature-flag/FeatureFlags";
import OutsideClick from "./components/outside-click/OutsideClick";
import ClickToScrtoll from "./components/click-scroll-top-bottom/ClickToScrtoll";
import Weather from "./components/wether/Weather";
import PlayGround from "./components/framer-motion/PlayGround";
import TextExpander from "./components/text-expander/TextExpander";
import ShopLayout from "./components/shop-demo/layout/Layout";
import CCPContentTest from "./components/patterns/CCPContentTest";
import RenderPropsTest from "./components/patterns/RenderPropsTest";
////
import ContextLayout from "./components/context-api/ContextLayout";
import ProductProvider from "./components/context-api/context/ProductContext";
import ProductsPage from "./components/context-api/containers/Products";
import FavoritesPage from "./components/context-api/containers/Favorites";
////
import PaginationTest from "./components/pagination/PaginationTest";
import Testing from "./components/testing";
//*** */

///
import Recipes, {
  loader as recipeLoader,
} from "./components/recipe/pages/Recipes";
import Home from "./components/recipe/pages/Home";
import Details, {
  loader as detailLoader,
} from "./components/recipe/pages/Details";
import Favorites from "./components/recipe/pages/Favorites";
import RootPage from "./components/recipe/pages/RootPage";
import About from "./components/recipe/pages/About";
import SearchProvider from "./components/recipe/SearchContext";
import UIProvider from "./components/recipe/uiContext";
import NoteApp from "./components/note-tracker/NoteApp";
///

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/star-rating", element: <Star /> },
  { path: "/slider", element: <Slider /> },
  { path: "/load-more-btn", element: <LoadMoreButton /> },
  { path: "/sidebar", element: <Sidebar /> },
  { path: "/menu", element: <Menu /> },
  { path: "/qrcode-generator", element: <QRCodeGenerator /> },
  { path: "/dark-light-theme", element: <Theme /> },
  { path: "/scroll-indicator", element: <ScrollIndicator /> },
  { path: "/tab-content", element: <TabContent /> },
  { path: "/modal-content", element: <ModalContent /> },
  { path: "/search-autocoplate", element: <SearchAutoComplete /> },
  { path: "/countries", element: <CountriesPage /> },
  { path: "/tic-tac-toe", element: <TicTacToe /> },
  { path: "/features-flags", element: <FeatureFlags /> },
  { path: "/outside-click", element: <OutsideClick /> },
  { path: "/click-to-scroll", element: <ClickToScrtoll /> },
  { path: "/weather", element: <Weather /> },
  { path: "/playground", element: <PlayGround /> },
  { path: "/text-expander", element: <TextExpander /> },
  { path: "/demo-shop", element: <ShopLayout /> },
  { path: "/ccp", element: <CCPContentTest /> },
  { path: "/render-props", element: <RenderPropsTest /> },
  {
    path: "/context-api",
    element: <ContextLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "/context-api/favorites", element: <FavoritesPage /> },
    ],
  },
  { path: "/pagination", element: <PaginationTest /> },
  { path: "/react-testing", element: <Testing /> },
  {
    path: "/recipes",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/recipes/recipes", element: <Recipes />, loader: recipeLoader },
      {
        path: "/recipes/recipes/:id",
        element: <Details />,
        loader: detailLoader,
      },
      { path: "/recipes/favorites", element: <Favorites /> },
      { path: "/recipes/about", element: <About /> },
    ],
  },
  { path: "/drag-drop-notes", element: <NoteApp /> },
]);

export default function RootRoutes() {
  return (
    <SearchProvider>
      <UIProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </UIProvider>
    </SearchProvider>
  );
}
