import { AiOutlineCreditCard } from "react-icons/ai";
import { BiNotification } from "react-icons/bi";
import { CiMap } from "react-icons/ci";
import { FaQuestion, FaRegBuilding } from "react-icons/fa";
import {
  HiOutlineAnnotation,
  HiOutlineArrowCircleRight,
  HiOutlineArrowDown,
  HiOutlineCursorClick,
  HiOutlineDesktopComputer,
  HiOutlineDownload,
  HiOutlineGlobe,
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
  HiOutlineMenuAlt4,
  HiOutlinePaperAirplane,
  HiOutlineSearch,
  HiOutlineTable,
  HiOutlineUser,
  HiOutlineZoomIn,
} from "react-icons/hi";
import {
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineBars2,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice,
  HiOutlineCake,
  HiOutlineCalculator,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCommandLine,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeDropper,
  HiOutlineFingerPrint,
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
import { MdSmartButton } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";

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
  { id: "multi-step", text: "Multi Step", icon: <HiOutlineMenuAlt3 /> },
  {
    id: "localstorage-customhook",
    text: "Localstorage Customhook",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    id: "geolocation-demo",
    text: "Geolocation Demo",
    icon: <HiOutlineGlobe />,
  },
  {
    id: "bank-with-reducer",
    text: "Demo Bank",
    icon: <HiOutlineBanknotes />,
  },
  {
    id: "rock-paper-scissors",
    text: "Rock Paper Scissors",
    icon: <HiOutlineFingerPrint />,
  },
  {
    id: "demo-card-screen",
    text: "Demo Card Screen",
    icon: <AiOutlineCreditCard />,
  },
  { id: "map-interact", text: "Map Interact", icon: <CiMap /> },
  { id: "notifications-demo", text: "Notifications", icon: <BiNotification /> },
  { id: "demo-auth", text: "Demo Auth", icon: <SiAuth0 /> },
  { id: "dictionary", text: "Dictionary", icon: <HiOutlineBookOpen /> },
  { id: "calculator", text: "Calculator", icon: <HiOutlineCalculator /> },
  { id: "zoom-image", text: "Zoom Slided Image", icon: <HiOutlineZoomIn /> },
  { id: "ccp-table", text: "Table With CCP", icon: <HiOutlineTable /> },
  { id: "get-random-advice", text: "Get Random Advice", icon: <FaQuestion /> },
  {
    id: "mortgage-calculator",
    text: "Mortgage Calculator",
    icon: <FaRegBuilding />,
  },
  { id: "form-validations", text: "Form Validations", icon: <HiOutlineUser /> },
  { id: "custom-button", text: "Custom Button", icon: <MdSmartButton /> },
];
