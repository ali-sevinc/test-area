import { ChangeEvent, useState } from "react";

type BoxSadowIds = "xOfset" | "yOfset" | "blur" | "radius" | "color";

export default function Button() {
  const [btnText, setBtnText] = useState("My Button");
  const [textColor, setTextColor] = useState("#2c2c2c");
  const [bgColor, setBgColor] = useState("#d1d1d1");
  const [fontSize, setFontSize] = useState(12);
  const [radius, setRadius] = useState(0);
  const [boxShadow, setBoxShadow] = useState({
    xOfset: 0,
    yOfset: 0,
    blur: 0,
    radius: 0,
    color: "#FF0000",
  });
  const [hoverStyle, setHoverStyle] = useState<"background" | "slide">(
    "background",
  );
  const [hoverColor, setHoverColor] = useState("#fcfcfc");
  const [isHovered, setIsHovered] = useState(false);

  function handleBoxShadow(id: BoxSadowIds, value: number | string) {
    setBoxShadow((prev) => ({ ...prev, [id]: value }));
  }
  function handleHoverStyle(event: ChangeEvent<HTMLInputElement>) {
    setHoverStyle(event.target.value as "background" | "slide");
  }

  return (
    <div className={`grid items-center gap-12 py-12  md:grid-cols-2`}>
      <div className="text-center">
        <button
          style={{
            color: textColor,
            backgroundColor:
              isHovered && hoverStyle === "background" ? hoverColor : bgColor,
            transition: "all 0.2s",
            borderRadius: `${radius}%`,
            boxShadow:
              isHovered && hoverStyle === "slide"
                ? ""
                : `${boxShadow.xOfset}px ${boxShadow.yOfset}px ${boxShadow.blur}px ${boxShadow.radius}px ${boxShadow.color}`,
            fontSize: `${fontSize}px`,
            transform:
              isHovered && hoverStyle === "slide"
                ? `translateX(${fontSize / 5}px) translateY(${fontSize / 10}px)`
                : "",
          }}
          className={`p-4 font-semibold  `}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {btnText}
        </button>
      </div>
      <form className="mx-auto flex max-w-sm flex-col gap-2">
        <fieldset className="flex flex-col gap-2 border-2 p-2">
          <legend className="font-bold">Basics</legend>
          <div className="flex items-center gap-4">
            <label htmlFor="text">Text</label>
            <input
              value={btnText}
              type="text"
              id="text"
              onChange={(e) => setBtnText(e.target.value)}
              className="w-full border"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="text-color">Text Color</label>
            <input
              type="color"
              id="text-color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="bg-color">Background Color</label>
            <input
              type="color"
              id="bg-color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label htmlFor="font">Font Size</label>
              <input
                max="64"
                id="radius"
                value={fontSize}
                min="12"
                type="range"
                onChange={(e) => setFontSize(+e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="radius">Border Radius</label>
              <input
                max="50"
                id="radius"
                value={radius}
                type="range"
                onChange={(e) => setRadius(+e.target.value)}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 border-2 px-2 py-1">
          <legend className="font-bold">Box Shadow</legend>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label htmlFor="x-ofset">X Ofset</label>
              <input
                max="25"
                min="-25"
                id="x-ofset"
                value={boxShadow.xOfset}
                type="range"
                onChange={(e) => handleBoxShadow("xOfset", +e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="y-ofset">Y Ofset</label>
              <input
                max="25"
                min="-25"
                id="y-ofset"
                value={boxShadow.yOfset}
                type="range"
                onChange={(e) => handleBoxShadow("yOfset", +e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label htmlFor="blur">Blur</label>
              <input
                max="25"
                min="0"
                id="blur"
                value={boxShadow.blur}
                type="range"
                onChange={(e) => handleBoxShadow("blur", +e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="radius-spread">Radius</label>
              <input
                max="25"
                min="0"
                id="radius-spread"
                value={boxShadow.radius}
                type="range"
                onChange={(e) => handleBoxShadow("radius", +e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="shadow-color">Color</label>
            <input
              id="shadow-color"
              value={boxShadow.color}
              type="color"
              onChange={(e) => handleBoxShadow("color", e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="border-2 p-2">
          <legend className="font-bold">Hover</legend>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <label htmlFor="background">Background</label>
              <input
                type="radio"
                id="background"
                name="background"
                value="background"
                onChange={handleHoverStyle}
                checked={hoverStyle === "background"}
              />
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="slide">Slide</label>
              <input
                type="radio"
                id="slide"
                name="slide"
                value="slide"
                onChange={handleHoverStyle}
                checked={hoverStyle === "slide"}
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="hover-color">Hover Color</label>
            <input
              type="color"
              id="hover-color"
              value={hoverColor}
              onChange={(e) => setHoverColor(e.target.value)}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
