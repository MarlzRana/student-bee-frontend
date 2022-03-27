import styles from './Feedback.module.css';
import { Suspense, lazy } from 'react';

const FeedbackChoices = lazy(() => import('./components/FeedbackChoice'));

function Feedback() {
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
                        <h2>How easy was it to use our website?</h2>
                        <FeedbackChoices question={1} />
                        <br />
                        <h2>How easy was it to use our website?</h2>
                        <FeedbackChoices question={2} />
                        <br />
                        <h2>How easy was it to use our website?</h2>
                        <FeedbackChoices question={3} />
                        <br />
                        <h2>How easy was it to use our website?</h2>
                        <FeedbackChoices question={4} />
                        <br />
                        <h2>How easy was it to use our website?</h2>
                        <FeedbackChoices question={5} />
                        <br />
                        <textarea 
                            name="" 
                            placeholder="Do you have any other suggestions or complaints?"
                        >
                        </textarea>
                        <input 
                            className={styles.submitFeedback}
                            type="submit"
                        />
                    </form>
                </div>  
            </div>
        </Suspense>
    );
}

export default Feedback;