import styles from '../Feedback.module.css';

function FeedbackChoices ({ question }) {
    return (
        <div className={styles.feedbackChoices}>
            <div className={styles.feedbackChoice}>
                <label htmlFor={"worst" + question}>
                    <input 
                        className={styles.radio} 
                        type="radio" 
                        name={question} 
                        id={"worst" + question} 
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
                        required
                    />
                    <span>😄</span>
                </label>    
            </div>
        </div>
    );
}

export default FeedbackChoices;