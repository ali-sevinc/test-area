import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, clicked: 0 });

  function handleCursorFollow(event: MouseEvent) {
    setCoordinates((prev) => ({
      ...prev,
      x: event.clientX,
      y: event.clientY,
    }));
  }
  function handleClick(event: MouseEvent) {
    if (event.button === 0) {
      setCoordinates((prev) => ({ ...prev, clicked: prev.clicked + 1 }));
    }
  }

  useEffect(
    function () {
      const canvas = ref.current;
      const context = canvas?.getContext("2d");

      function draw() {
        if (!context || !canvas) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "white";
        context.lineWidth = 2;

        context.beginPath();
        context.moveTo(0, coordinates.y);
        context.lineTo(canvas.width, coordinates.y);
        context.stroke();

        context.beginPath();
        context.moveTo(coordinates.x, 0);
        context.lineTo(coordinates.x, canvas.height);
        context.stroke();

        context.beginPath();
        context.arc(coordinates.x, coordinates.y, 10, 0, 2 * Math.PI);
        context.stroke();
      }
      draw();

      window.addEventListener("mousemove", handleCursorFollow);
      return () => window.removeEventListener("mousemove", handleCursorFollow);
    },
    [coordinates]
  );

  useEffect(function () {
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="text-white absolute border p-4 text-xs w-20 h-20"
        style={{
          top: `${
            coordinates.y + 80 >= window.innerHeight
              ? coordinates.y - 80
              : coordinates.y
          }px`,
          left: `${
            coordinates.x + 80 >= window.innerWidth
              ? coordinates.x - 80
              : coordinates.x
          }px`,
        }}
      >
        <p className="flex gap-1">
          <span>X:</span>
          <span>{coordinates.x}</span>
        </p>
        <p className="flex gap-1">
          <span>Y:</span>
          <span>{coordinates.y}</span>
        </p>
        <p className="flex gap-1">
          <span>Clicked:</span>
          <span>{coordinates.clicked}</span>
        </p>
      </div>
      <canvas
        ref={ref}
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0"
      />
    </div>
  );
}
