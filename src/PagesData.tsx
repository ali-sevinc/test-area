import {
  HiOutlineAnnotation,
  HiOutlineArrowCircleRight,
  HiOutlineArrowDown,
  HiOutlineCursorClick,
  HiOutlineDownload,
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt4,
  HiOutlinePaperAirplane,
  HiOutlineSearch,
  HiOutlineTable,
} from "react-icons/hi";
import {
  HiOutlineAcademicCap,
  HiOutlineBars2,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice,
  HiOutlineCake,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCommandLine,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeDropper,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineMoon,
  HiOutlinePlay,
  HiOutlineQrCode,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineStar,
  HiOutlineTicket,
} from "react-icons/hi2";

export const PAGES: { id: string; text: string; icon: JSX.Element }[] = [
  {
    id: "star-rating",
    text: "Star Rating",
    icon: <HiOutlineStar />,
  },
  { id: "slider", text: "Image Slider", icon: <HiOutlineArrowCircleRight /> },
  {
    id: "load-more-btn",
    text: "Load More Button",
    icon: <HiOutlineDownload />,
  },
  { id: "sidebar", text: "Sidebar", icon: <HiOutlineBars2 /> },
  { id: "menu", text: "Menu", icon: <HiOutlineMenu /> },
  {
    id: "qrcode-generator",
    text: "QRCode Generator",
    icon: <HiOutlineQrCode />,
  },
  { id: "dark-light-theme", text: "Dark/Light Theme", icon: <HiOutlineMoon /> },
  {
    id: "scroll-indicator",
    text: "Scroll Indicator",
    icon: <HiOutlineArrowDown />,
  },
  { id: "tab-content", text: "Tab Content", icon: <HiOutlineTable /> },
  { id: "modal-content", text: "Modal Content", icon: <HiOutlineBriefcase /> },
  {
    id: "search-autocoplate",
    text: "Search Autocomplate",
    icon: <HiOutlineSearch />,
  },
  { id: "countries", text: "Countries", icon: <HiOutlineBuildingOffice /> },
  { id: "tic-tac-toe", text: "Tic Tac Toe", icon: <HiOutlinePlay /> },
  { id: "features-flags", text: "Features Flags", icon: <HiOutlineFlag /> },
  {
    id: "outside-click",
    text: "Outside Click",
    icon: <HiOutlineCursorClick />,
  },
  {
    id: "click-to-scroll",
    text: "Click to Scroll",
    icon: <HiOutlineAnnotation />,
  },
  { id: "weather", text: "Weather", icon: <HiOutlineCloud /> },
  { id: "playground", text: "Playground", icon: <HiOutlineBars2 /> },
  {
    id: "text-expander",
    text: "Text Expander",
    icon: <HiOutlineDocumentText />,
  },
  { id: "demo-shop", text: "Demo Shop", icon: <HiOutlineShoppingCart /> },
  {
    id: "ccp",
    text: "Compound Component Pattern",
    icon: <HiOutlineMenuAlt4 />,
  },
  { id: "render-props", text: "Render Props", icon: <HiOutlineCircleStack /> },
  { id: "context-api", text: "Context API", icon: <HiOutlineCommandLine /> },
  { id: "pagination", text: "Pagination", icon: <HiOutlinePaperAirplane /> },
  {
    id: "react-testing",
    text: "React Test",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  { id: "recipes", text: "Recipes", icon: <HiOutlineDocumentArrowDown /> },
  {
    id: "drag-drop-notes",
    text: "Drag Drop Notes",
    icon: <HiOutlineEyeDropper />,
  },
  { id: "roll-dice", text: "Roll Dice", icon: <HiOutlineExclamationCircle /> },
  { id: "steps-menu", text: "Step Menu", icon: <HiOutlineMenuAlt2 /> },
  { id: "github-profile", text: "Github Profile", icon: <HiOutlineGift /> },
  { id: "accordion", text: "Accordion", icon: <HiOutlineAcademicCap /> },
  { id: "tip-calculator", text: "Tip Calculator", icon: <HiOutlineTicket /> },
  { id: "split-bill", text: "Split Bill", icon: <HiOutlineCake /> },
  {
    id: "password-generator",
    text: "Password Generator",
    icon: <HiOutlineEye />,
  },
  {
    id: "currency-calculator",
    text: "Currencey Calculator",
    icon: <HiOutlineCurrencyDollar />,
  },
];
