import { FormEvent, useState } from "react";
import Star from "./Star";
import styles from "./StarContent.module.css";
import { HiStar } from "react-icons/hi";
export default function StarContent() {
  const [rating, setRating] = useState<number | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!rating) return;
    window.alert(`Your rate is ${rating}, thank you for your feedback`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <HiStar className={styles.logo} />
        </div>
        <h1>How do you like us?</h1>
        <h2>Please let us know how we did with your support request.</h2>
        <div className={styles.rate}>
          <Star
            sizes={64}
            starsNum={5}
            onGetValue={(rating) => setRating(rating)}
            isShowRatingNum={false}
          />
        </div>
        {rating && (
          <form onSubmit={handleSubmit} className={styles.submit}>
            <button>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
