import styles from "../Feedback.module.css";
import { useState } from "react";

function FeedbackChoices({ question, rating }) {
  const [currentRating, setCurrentRating] = useState("");
  return (
    <div className={styles.feedbackChoices}>
      <div className={styles.feedbackChoice}>
        <label htmlFor={"worst" + question}>
          <input
            className={styles.radio}
            type="radio"
            name={question}
            id={"worst" + question}
            onClick={() => rating("1")}
            required
          />
          <span>🤬</span>
        </label>
      </div>
      <div className={styles.feedbackChoice}>
        <label htmlFor={"bad" + question}>
          <input
            className={styles.radio}
            type="radio"
            name={question}
            id={"bad" + question}
            onClick={() => rating("2")}
            required
          />
          <span>☹️</span>
        </label>
      </div>
      <div className={styles.feedbackChoice}>
        <label htmlFor={"none" + question}>
          <input
            className={styles.radio}
            type="radio"
            name={question}
            id={"none" + question}
            onClick={() => rating("3")}
            required
          />
          <span>😐</span>
        </label>
      </div>
      <div className={styles.feedbackChoice}>
        <label htmlFor={"good" + question}>
          <input
            className={styles.radio}
            type="radio"
            name={question}
            id={"good" + question}
            onClick={() => rating("4")}
            required
          />
          <span>🙂</span>
        </label>
      </div>
      <div className={styles.feedbackChoice}>
        <label htmlFor={"best" + question}>
          <input
            className={styles.radio}
            type="radio"
            name={question}
            id={"best" + question}
            onClick={() => rating("5")}
            required
          />
          <span>😄</span>
        </label>
      </div>
    </div>
  );
}

export default FeedbackChoices;
