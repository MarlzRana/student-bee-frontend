import styles from "./Feedback.module.css";
import { Suspense, lazy, useState } from "react";
import Axios from "axios";

const FeedbackChoices = lazy(() => import("./components/FeedbackChoice"));

function Feedback() {
  const [firstImpressionRating, setFirstImpressionRating] = useState("");
  const [recommendationRating, setRecommendationRating] = useState("");
  const [easeOfUseRating, setEaseOfUseRating] = useState("");
  const [wantedFeature, setWantedFeature] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [otherSuggestions, setOtherSuggestions] = useState("");
  const [messageToShow, setMessageToShow] = useState("");

  const submitFeedback = async (e) => {
    e.preventDefault();
    const payload = {
      firstImpressionRating: firstImpressionRating,
      recommendationRating: recommendationRating,
      easeOfUseRating: easeOfUseRating,
      wishedFeature: wantedFeature,
      howHeard: howHeard,
      otherSuggestions: otherSuggestions,
    };
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/feedbackSystem/submitFeedback",
        payload
      );
      if (res.data.status === "success") {
        setMessageToShow("Thank you for your feedback!");
        setWantedFeature("");
        setHowHeard("");
        setOtherSuggestions("");
      }
      if (res.data.status === "failure") {
        if (res.data.reason === "invalidInputFormat") {
          setMessageToShow(
            "Please ensure you have given a rating before submitting"
          );
        }
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.feedbackPage}>
        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackHeader}>
            <h1>Feedback</h1>
            <p>We are aware that it is not possible to satisfy everyone</p>
            <p>Give us a feedback to help us improve</p>
            <p>Your ideas are greatly appreciated</p>
          </div>

          <form className={styles.feedbackForm}>
            <h2>
              What was your first impression when you first entered our website?
            </h2>
            <FeedbackChoices
              question={1}
              rating={(score) => setFirstImpressionRating(score)}
            />
            <br />
            <h2>
              How likely are you to recommend us to a friend or colleague?
            </h2>
            <FeedbackChoices
              question={2}
              rating={(score) => setRecommendationRating(score)}
            />
            <br />
            <h2>How easy was it to use our website?</h2>
            <FeedbackChoices
              question={3}
              rating={(score) => setEaseOfUseRating(score)}
            />
            <br />
            <h2>What is a feature you wish our website had?</h2>
            <input
              className={styles.feedbackTextInput}
              name="wantedFeature"
              id="wantedFeature"
              type="text"
              onChange={(e) => setWantedFeature(e.target.value)}
              required
            />
            <br />
            <h2>How did you hear about us?</h2>
            <input
              className={styles.feedbackTextInput}
              placeholder="Ads, Social Media, etc"
              name="howHeard"
              id="howHeard"
              type="text"
              onChange={(e) => setHowHeard(e.target.value)}
              required
            />
            <br />
            <h2>Other suggestions</h2>
            <textarea
              name="otherSuggestions"
              id="otherSuggestions"
              placeholder="Do you have any other suggestions or complaints?"
              onChange={(e) => setOtherSuggestions(e.target.value)}
            ></textarea>
            <input
              className={styles.submitFeedback}
              name=""
              value="Submit"
              type="submit"
              onClick={(e) => submitFeedback(e)}
            />
            <h2>{messageToShow}</h2>
          </form>
        </div>
      </div>
    </Suspense>
  );
}

export default Feedback;
