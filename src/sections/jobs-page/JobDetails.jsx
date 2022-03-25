import styles from "./JobDetails.module.css";

function EventDetails() {
    return(
        <div className={styles.details}>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <h1>Accountant</h1>
                    <p>Start Date : DD/MM/YYYY</p>
                    <button>Apply Now</button>
                </div>  
            </div> 
            <div className={styles.jobDesc}>
                <div className={styles.info}>
                    <h2>Job Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                    </p>
                    <br />
                    <h2>Requirements</h2>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h2>Contacts</h2>
                    <br />
                    <ul>
                        <li>first.last@mail.com</li>
                        <li>07911 123456</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;