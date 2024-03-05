import RootRoutes from "./RootRoutes";

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

  return <RootRoutes />;
}
