import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";

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
import Bank from "./components/bankaccount-with-reducer/Bank";
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
const LocalStorageTest = lazy(
  () => import("./components/localstorage-customhook/LocalStorageTest"),
);
const GeoLoc = lazy(() => import("./components/geolocation-demo/GeoLoc"));
const RockPaperScissors = lazy(
  () => import("./components/rock-paper-scissors/RockPaperScissors"),
);
const CardScreen = lazy(
  () => import("./components/demo-card-screen/CardScreen"),
);
const Map = lazy(() => import("./components/map-interact/Map"));
const Notifications = lazy(
  () => import("./components/notifications/Notifications"),
);
const AuthUserProvider = lazy(
  () => import("./components/demo-auth/UserContext"),
);
const AuthRootRoute = lazy(() => import("./components/demo-auth/RootRoute"));
const AuthLanding = lazy(() => import("./components/demo-auth/Landing"));
const AuthProtectedRoutes = lazy(
  () => import("./components/demo-auth/ProtectedRoutes"),
);
const AuthProducts = lazy(() => import("./components/demo-auth/Produtcs"));
const AuthLogin = lazy(() => import("./components/demo-auth/Login"));
const AuthError = lazy(() => import("./components/demo-auth/Error"));
///
const Dictionary = lazy(() => import("./components/dictionary/Dictionary.tsx"));
import DictionaryThemeProvider from "./components/dictionary/DictionaryThemeContext";
///
const Calculator = lazy(() => import("./components/calculator/Calculator"));
const ZoomImage = lazy(
  () => import("./components/zoom-slided-image/ZoomImage"),
);
const CCPTable = lazy(() => import("./components/ccp-table/CCPTable"));
const GetAdvice = lazy(
  () => import("./components/get-random-advice/GetAdvice"),
);
const Mortgage = lazy(
  () => import("./components/mortgate-calculator/Mortgate"),
);

///
const RootAuthPage = lazy(
  () => import("./components/form-validation/RootAuthPage"),
);
const AuthLandingPage = lazy(
  () => import("./components/form-validation/AuthLanding"),
);
const SignUp = lazy(() => import("./components/form-validation/SignUp"));
const MyButton = lazy(() => import("./components/custom-button/MyButton.tsx"));
const MarqueePanel = lazy(
  () => import("./components/marquee-panel/MarqueePanel.tsx"),
);
const CursorFollower = lazy(
  () => import("./components/cursor-follower/CursorFollower.tsx"),
);

//**************
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorFallback />,
      },
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
          {
            path: "/recipes/recipes",
            element: <Recipes />,
            loader: recipeLoader,
          },
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
      { path: "/localstorage-customhook", element: <LocalStorageTest /> },
      { path: "/geolocation-demo", element: <GeoLoc /> },
      { path: "/bank-with-reducer", element: <Bank /> },
      { path: "/rock-paper-scissors", element: <RockPaperScissors /> },
      { path: "/demo-card-screen", element: <CardScreen /> },
      { path: "/map-interact", element: <Map /> },
      { path: "/notifications-demo", element: <Notifications /> },
      {
        element: <AuthRootRoute />,
        errorElement: <AuthError />,
        children: [
          {
            path: "/demo-auth",
            element: <AuthProtectedRoutes />,
            children: [
              {
                index: true,
                element: <AuthLanding />,
                errorElement: <AuthError />,
              },
              { path: "/demo-auth/products", element: <AuthProducts /> },
            ],
          },
          { path: "/demo-auth/login", element: <AuthLogin /> },
        ],
      },
      { path: "/dictionary", element: <Dictionary /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/zoom-image", element: <ZoomImage /> },
      { path: "/ccp-table", element: <CCPTable /> },
      { path: "/get-random-advice", element: <GetAdvice /> },
      { path: "mortgage-calculator", element: <Mortgage /> },
      {
        path: "/form-validations",
        element: <RootAuthPage />,
        children: [
          { index: true, element: <AuthLandingPage /> },

          { path: "signup", element: <SignUp /> },
        ],
      },
      { path: "custom-button", element: <MyButton /> },
      { path: "marquee-panel", element: <MarqueePanel /> },
      { path: "cursor-follower", element: <CursorFollower /> },
    ],
  },
]);

///error boundary
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback.tsx";
import { HiArrowNarrowLeft } from "react-icons/hi";
///

export default function RootRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

function RootLayout() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "hidden"
            : "fixed bottom-4 right-4 z-50 flex items-center gap-4 rounded-l-2xl bg-zinc-200 px-4 text-2xl hover:bg-zinc-400"
        }
      >
        <HiArrowNarrowLeft /> Go Back
      </NavLink>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <SearchProvider>
          <UIProvider>
            <ProductProvider>
              <AuthUserProvider>
                <DictionaryThemeProvider>
                  <Outlet />
                </DictionaryThemeProvider>
              </AuthUserProvider>
            </ProductProvider>
          </UIProvider>
        </SearchProvider>
      </ErrorBoundary>
    </>
  );
}
