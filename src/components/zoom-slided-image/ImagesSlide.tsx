import { MouseEvent, useRef, useState } from "react";

export default function ImagesSlide({ images }: { images: string[] }) {
  const [focusedImage, setFocusedImage] = useState(() => images[0]);
  const ref = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState({ x: 0, y: 0 });

  function handleZoom(event: MouseEvent<HTMLImageElement>) {
    if (!ref.current) return;
    setZoom(true);
    const image = event.target as HTMLImageElement;
    const rect = image.getBoundingClientRect();
    const oX = event.clientX - rect.left;
    const oY = event.clientY - rect.top;

    setZoomedImage({ x: oX, y: oY });
  }
  function handleMouseLeave() {
    setZoom(false);
  }

  return (
    <div className="relative grid grid-cols-2 w-full gap-1">
      <div className="flex flex-col gap-2">
        <div className="h-[32rem] bg-slate-50 flex flex-col items-center justify-center w-full overflow-hidden">
          <img
            ref={ref}
            src={focusedImage}
            className="cursor-zoom-in object-contain"
            onMouseMove={handleZoom}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="flex items-start justify-start gap-1">
          {images.map((img) => {
            return (
              <img
                className={`h-24 w-24 cursor-pointer bg-slate-50 object-contain ${
                  img === focusedImage ? "border-4 border-green-500" : ""
                }`}
                src={img}
                onClick={() => setFocusedImage(img)}
                key={img}
              />
            );
          })}
        </div>
      </div>
      {zoom && (
        <div className="overflow-hidden border">
          <img
            src={focusedImage}
            style={{ transformOrigin: `${zoomedImage.x}px ${zoomedImage.y}px` }}
            className="scale-[3]"
          />
        </div>
      )}
    </div>
  );
}
