import { useEffect, useState } from "react";

//star rating.
import Star from "./components/start-rating/Star";

//image slider
import Slider from "./components/image-slider/Slider";

//Load more item
import LoadMoreButton from "./components/load-more/LoadMoreButton";

//
import Sidebar from "./components/menu-ccp/Sidebar";

//
import Menu from "./components/menu/Menu";

//
import QRCodeGenerator from "./components/qrcode/QRCode";

//dark-light mode
import Theme from "./components/theme-change/Theme";

//scroll tracker
import ScrollIndicator from "./components/scroll-tracker/ScrollIndicator";

//tab content
import TabContent from "./components/tab-contents/TabContent";

//Modal Content
import ModalContent from "./components/modal/ModalContent";

//input autocomplate
import SearchAutoComplete from "./components/search-autocomplete/SearchAutoComplete";

//filtering
import CountriesPage from "./components/country-filter/CountryFilter";

//tic tac toe game
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import TicToc from "./components/tic-tac-toe/TicTacv2";

//feature context
import FeatureFlags from "./components/feature-flag/FeatureFlags";
import FeatureFlagsProvider from "./components/feature-flag/FeatureContext";

//useOutside custom hook
import OutsideClick from "./components/outside-click/OutsideClick";

//click to scroll
import ClickToScrtoll from "./components/click-scroll-top-bottom/ClickToScrtoll";

//weather api
import Weather from "./components/wether/Weather";

//framer-motion
import PlayGround from "./components/framer-motion/PlayGround";

//text expander
import TextExpander from "./components/text-expander/TextExpander";

//shop/redux-toolkit
import Layout from "./components/shop-test/layout/Layout";
import { Provider } from "react-redux";
import { store } from "./components/shop-test/store/store";

//React patterns
import CCPContentTest from "./components/patterns/CCPContentTest";
import RenderPropsTest from "./components/patterns/RenderPropsTest";

export default function App() {
  /*
  function capitilizeOther(value: string) {
    const valueArr = value.toLowerCase().split("");
    // const newArr = valueArr.filter((val) => val !== " ");
    const mapped = valueArr.map((letter, index) =>
      index % 2 === 0 && letter !== " " ? letter.toUpperCase() : letter
    );
    console.log(mapped);
    console.log(mapped.join(""));
    return mapped.join("");
  }
*/

  return (
    <div>
      {/* <button onClick={() => capitilizeOther("this is string")}>Click</button> */}

      {/* Star rating */}
      {/* <Star onGetValue={(value) => console.log(value)} color="red" /> */}

      {/* Image Slider */}
      {/* <Slider /> */}

      {/* Load more data (kind of lazy load...) */}
      {/* <LoadMoreButton /> */}

      {/* Menu via "Compond Components Recipe" */}
      {/* <Sidebar /> */}

      {/* Menu via basic re-usable components */}
      {/* <Menu /> */}

      {/* Genarate QRCode  */}
      {/* <QRCodeGenerator /> */}

      {/* Change color theme */}
      {/* <Theme /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator /> */}

      {/* Tab Content */}
      {/* <TabContent /> */}

      {/* Modal Content */}
      {/* <ModalContent /> */}

      {/* Search AutoComplate */}
      {/*<SearchAutoComplete />*/}

      {/* country filter. */}
      {/* {<CountriesPage />} */}

      {/* TicTacToe */}
      {/* <TicToc /> */}
      {/* <TicTacToe /> */}

      {/* Feature Flags */}
      {/* <FeatureFlagsProvider>
        <FeatureFlags />
      </FeatureFlagsProvider> */}

      {/* Outside Click */}
      {/* <OutsideClick /> */}

      {/* Click Scroll to top/bottom */}
      {/*<ClickToScrtoll />*/}

      {/* City Weather searching. */}
      {/* <Weather /> */}

      {/* Framer-motion-playground */}
      {/* <PlayGround /> */}

      {/* Text Expander */}
      {/* <TextExpander /> */}

      {/* Shop */}
      {/*<Provider store={store}>
        <Layout />
    </Provider>*/}

      {/* React Pattenrs */}
      {/* Compound Components Pattern */}
      <CCPContentTest />
      {/* Render Props Pattern & Debouncing */}
      <RenderPropsTest />
    </div>
  );
}
