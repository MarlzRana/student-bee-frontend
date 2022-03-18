import styles from "./EventDetails.module.css";

function EventDetails() {
    return(
        <div className={styles.details}>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <h1>Music Festival</h1>
                    <p>DD/MM/YYYY</p>
                </div>  
            </div> 
            <div className={styles.eventDesc}>
                <div className={styles.info}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.</p>
                </div>
                <div className={styles.contact}>
                    <h2>Contacts</h2>
                    <ul>
                        <li>first.last@mail.com</li>
                        <li>07911 123456</li>
                    </ul>
                    <br />
                    <h2>Organisers</h2>
                    <ul>
                        <li>First Last</li>
                        <li>First Last</li>
                        <li>First Last</li>
                        <li>First Last</li>
                        <li>First Last</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;