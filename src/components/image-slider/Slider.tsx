import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import {
  HiArrowLeftCircle,
  HiArrowRightCircle,
  HiArrowPath,
} from "react-icons/hi2";

const url = "https://picsum.photos/v2/list?page1&limit=5";

// type PropsType = { url: string };
type ImagesType = { id: string; author: string; download_url: string };
export default function Slider() {
  const [images, setImages] = useState<ImagesType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(function () {
    async function fetchImages() {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Somehing went wrong");

        const data = await res.json();
        setImages(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, []);

  function handleLeft() {
    setCurrentImage((cur) => (cur <= 0 ? images.length - 1 : cur - 1));
  }
  function handleRight() {
    setCurrentImage((cur) => (cur >= images.length - 1 ? 0 : cur + 1));
  }

  //   console.log(images);
  if (isError)
    return (
      <div>
        <h1>An Error Occured!</h1>
        <p>Something went wrong while fetching images data.</p>
      </div>
    );
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loading}>
            <HiArrowPath />
          </div>
        ) : (
          <>
            <button onClick={handleLeft} className={styles.left}>
              <HiArrowLeftCircle />
            </button>
            <div
              className={styles.images}
              style={{ transform: `translateX(${-currentImage * 520}px)` }}
            >
              {images.map((image) => {
                return (
                  <img
                    key={image.id}
                    src={image.download_url}
                    alt={image.author}
                  />
                );
              })}
            </div>
            <div className={styles.circlesContainer}>
              {images.map((_, index) => (
                <div
                  onClick={() => setCurrentImage(index)}
                  key={index}
                  className={styles.circles}
                  style={{
                    backgroundColor: index === currentImage ? "white" : "",
                  }}
                />
              ))}
            </div>

            <button onClick={handleRight} className={styles.right}>
              <HiArrowRightCircle />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
