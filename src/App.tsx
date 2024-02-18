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
      <Menu />
    </div>
  );
}
