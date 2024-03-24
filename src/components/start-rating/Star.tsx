import { HiOutlineStar, HiStar } from "react-icons/hi2";
import styles from "./Star.module.css";
import { useState } from "react";

type PropsType = {
  starsNum?: number;
  color?: string;
  defaultRating?: number;
  sizes?: number;
  onGetValue?: (value: number) => void;
  isShowRatingNum?: boolean;
};
export default function Star({
  starsNum = 10,
  color = "yellow",
  defaultRating = 0,
  sizes = 44,
  onGetValue,
  isShowRatingNum = true,
}: PropsType) {
  const [hoveredStars, setHoveredStars] = useState<number>(0);
  const [rating, setRating] = useState<number>(defaultRating);
  function handleRating(value: number) {
    setRating(value);
    onGetValue?.(value);
  }
  const arr = Array.from({ length: starsNum }, (_, i) => i + 1);

  let ratingNum: number | null = null;
  if (hoveredStars > 0) {
    ratingNum = hoveredStars;
  } else if (rating > 0) {
    ratingNum = rating;
  }

  return (
    <div className={styles.container}>
      <div className={styles.star}>
        {arr.map((item) => (
          <Button
            key={item}
            color={color}
            setHoveredStars={setHoveredStars}
            itemNum={item}
            hoveredStars={hoveredStars}
            rating={rating}
            onRating={handleRating}
            sizes={sizes}
          />
        ))}
      </div>

      {isShowRatingNum && (
        <p style={{ fontSize: `${sizes - 8}px` }}>{ratingNum}</p>
      )}
    </div>
  );
}

type ButtonType = {
  color: string;
  itemNum: number;
  rating: number;
  sizes: number;
  hoveredStars: number;
  onRating: (value: number) => void;
  setHoveredStars: (value: number) => void;
};
function Button({
  color,
  setHoveredStars,
  itemNum,
  hoveredStars,
  rating,
  onRating,
  sizes,
}: ButtonType) {
  const isFullStar = hoveredStars
    ? hoveredStars >= itemNum
    : rating && rating >= itemNum;
  return (
    <button
      onClick={() => onRating(itemNum)}
      onMouseOver={() => setHoveredStars(itemNum)}
      onMouseLeave={() => setHoveredStars(0)}
      style={{ fontSize: `${sizes}px`, paddingTop: sizes / 5 }}
    >
      {isFullStar ? <HiStar color={color} /> : <HiOutlineStar />}
    </button>
  );
}
