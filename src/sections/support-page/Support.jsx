import styles from "./Support.module.css";

function Support() {
    return (
        <div className={styles.supportPage}>
            <div className={styles.contacts}>
                <div className={styles.contactHeader}>
                    <h1>Contact Numbers</h1>
                    <i className={styles.phoneIcon}></i>
                </div>
                <ul>
                    <li>
                        <b>test</b> 
                        <br />
                        test
                    </li>
                </ul>
            </div>
            <div className={styles.faqContainer}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles.faq}>
                    <div>
                        <input 
                            type="radio" 
                            name="faq" 
                            id="section1"
                            className={styles.faqInput}
                        />
                        <label htmlFor="section1" className={styles.faqLabel}>How do you navigate through the website?</label>
                        <div className={styles.faqContent}>
                            <p>You can navigate through the website by using the navigation bar located at the top of your browser.</p>
                        </div>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="faq" 
                            id="section2"
                            className={styles.faqInput}
                        />
                        <label htmlFor="section2" className={styles.faqLabel}>Why did you create this website?</label>
                        <div className={styles.faqContent}>
                            <p>To reconnect students especially international students who are not familiar with their new environment</p>
                        </div>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="faq" 
                            id="section3"
                            className={styles.faqInput}
                        />
                        <label htmlFor="section3" className={styles.faqLabel}>My account got hacked!</label>
                        <div className={styles.faqContent}>
                            <p>Contact us through our email <b>studentbee@outlook.com</b> for further action</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;