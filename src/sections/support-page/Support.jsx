import styles from "./Support.module.css";

function Support() {
    return (
        <div className={styles.supportPage}>
            <h1>Support Section</h1>
            <div className={styles.contacts}>
                <div className={styles.contactHeader}>
                    <h2>Contact Numbers</h2>
                    <i className={styles.phoneIcon}></i>
                </div>
                <ul>
                    <li>
                        <b>National Suicide Prevention Helpline UK</b> 
                        <br />
                        0800 689 5652 (24/7)
                    </li>
                    <li>
                        <b>HopeLine UK</b> 
                        <br />
                        0800 068 4141 (24/7)
                    </li>
                    <li>
                        <b>National Emergency Number UK</b> 
                        <br />
                        999 (24/7)
                    </li>
                    <li>
                        <b>National Health Service UK</b> 
                        <br />
                        111 (24/7)
                    </li>
                    <li>
                        <b>YoungMinds</b> 
                        <br />
                        Text YM to 85258 (24/7)
                    </li>
                    <li>
                        <b>Switchboard</b> 
                        <br />
                        0300 330 0630 (10am - 10pm every day)
                    </li>
                </ul>
            </div>
            <div className={styles.faqContainer}>
                <h2>Frequently Asked Questions (FAQ)</h2>
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