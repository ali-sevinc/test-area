import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//**** */
const HomePage = lazy(() => import("./HomePage"));
const StarContent = lazy(() => import("./components/start-rating/StarContent"));
const Slider = lazy(() => import("./components/image-slider/Slider"));
const LoadMoreButton = lazy(
  () => import("./components/load-more/LoadMoreButton"),
);
const Sidebar = lazy(() => import("./components/menu-ccp/Sidebar"));
const Menu = lazy(() => import("./components/menu/Menu"));
const QRCodeGenerator = lazy(() => import("./components/qrcode/QRCode"));
const Theme = lazy(() => import("./components/theme-change/Theme"));
const ScrollIndicator = lazy(
  () => import("./components/scroll-tracker/ScrollIndicator"),
);
const TabContent = lazy(() => import("./components/tab-contents/TabContent"));
const ModalContent = lazy(() => import("./components/modal/ModalContent"));
const SearchAutoComplete = lazy(
  () => import("./components/search-autocomplete/SearchAutoComplete"),
);
const CountriesPage = lazy(
  () => import("./components/country-filter/CountryFilter"),
);
const TicTacToe = lazy(() => import("./components/tic-tac-toe/TicTacToe"));
const FeatureFlags = lazy(
  () => import("./components/feature-flag/FeatureFlags"),
);
const OutsideClick = lazy(
  () => import("./components/outside-click/OutsideClick"),
);
const ClickToScrtoll = lazy(
  () => import("./components/click-scroll-top-bottom/ClickToScrtoll"),
);
const Weather = lazy(() => import("./components/wether/Weather"));
const PlayGround = lazy(() => import("./components/framer-motion/PlayGround"));
const TextExpander = lazy(
  () => import("./components/text-expander/TextExpander"),
);
const ShopLayout = lazy(() => import("./components/shop-demo/layout/Layout"));
const CCPContentTest = lazy(
  () => import("./components/patterns/CCPContentTest"),
);
const RenderPropsTest = lazy(
  () => import("./components/patterns/RenderPropsTest"),
);
//*****
const ProductProvider = lazy(
  () => import("./components/context-api/context/ProductContext"),
);
const ContextLayout = lazy(
  () => import("./components/context-api/ContextLayout"),
);
const ProductsPage = lazy(
  () => import("./components/context-api/containers/Products"),
);
const FavoritesPage = lazy(
  () => import("./components/context-api/containers/Favorites"),
);
//****
const PaginationTest = lazy(
  () => import("./components/pagination/PaginationTest"),
);
const Testing = lazy(() => import("./components/testing"));

//*****
const Home = lazy(() => import("./components/recipe/pages/Home"));
const Recipes = lazy(() => import("./components/recipe/pages/Recipes"));
import { loader as recipeLoader } from "./components/recipe/pages/Recipes";
const Details = lazy(() => import("./components/recipe/pages/Details"));
import { loader as detailLoader } from "./components/recipe/pages/Details";
import Loader from "./Loader";
const Favorites = lazy(() => import("./components/recipe/pages/Favorites"));
const RootPage = lazy(() => import("./components/recipe/pages/RootPage"));
const About = lazy(() => import("./components/recipe/pages/About"));
const SearchProvider = lazy(() => import("./components/recipe/SearchContext"));
const UIProvider = lazy(() => import("./components/recipe/uiContext"));
//*****
const NoteApp = lazy(() => import("./components/note-tracker/NoteApp"));
const Dice = lazy(() => import("./components/dice-roll/Dice"));
const StepsMenu = lazy(() => import("./components/steps-menu/StepsMenu"));
const GitHubProfile = lazy(
  () => import("./components/github-profile/GitHubProfile"),
);

const Accordion = lazy(() => import("./components/accordion-menu/Accordion"));
const TipCalculator = lazy(
  () => import("./components/tip-calculator/TipCalculator"),
);
const SplitBill = lazy(() => import("./components/bill-split/SplitBill"));
const PasswordGenerator = lazy(
  () => import("./components/password-generator/PasswordGenerator"),
);
const CurrencyCalculator = lazy(
  () => import("./components/currency-calculator/CurrencyCalculator"),
);
const MultiStep = lazy(() => import("./components/multi-step/MultiStep"));

//**************
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/star-rating", element: <StarContent /> },
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
  { path: "/roll-dice", element: <Dice /> },
  { path: "/steps-menu", element: <StepsMenu /> },
  { path: "/github-profile", element: <GitHubProfile /> },
  { path: "/accordion", element: <Accordion /> },
  { path: "/tip-calculator", element: <TipCalculator /> },
  { path: "/split-bill", element: <SplitBill /> },
  { path: "/password-generator", element: <PasswordGenerator /> },
  { path: "/currency-calculator", element: <CurrencyCalculator /> },
  { path: "/multi-step", element: <MultiStep /> },
]);

export default function RootRoutes() {
  return (
    <SearchProvider>
      <UIProvider>
        <ProductProvider>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </ProductProvider>
      </UIProvider>
    </SearchProvider>
  );
}
