import styles from './SocietyDetails.module.css';
import pic from '../profile-section/components/DefaultProfilePic.jpg';
import { Suspense, lazy } from 'react';

const SocietyMember = lazy(() => import('./components/SocietyMember'));

function SocietyDetails() {
    return(
        <Suspense>
            <div className={styles.societyDetails}>
                <div className={styles.societyBanner}>
                    <div className={styles.societyBannerText}>
                        <h1>Outdoors Society</h1>
                    </div>  
                </div> 
                <div className={styles.societyMembers}>
                    <h2>Members</h2>
                    <ul>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                        <li>
                            <SocietyMember profilePic={pic} firstName='First' lastName='Last'/>
                        </li>
                    </ul>
                </div>
                <div className={styles.societyDesc}>
                    <div className={styles.societyInfo}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.
                        </p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat porttitor, imperdiet nunc a, tincidunt magna. Phasellus quis scelerisque lacus, sit amet ultricies nisi. Cras commodo purus bibendum dolor dictum, et viverra lacus eleifend. Nulla facilisi. Maecenas eu libero eget tortor lacinia dictum vitae id urna. Aenean porttitor pulvinar dui non mattis. Curabitur hendrerit lectus at ornare rhoncus. Duis a est augue. Sed elit mauris, semper et sapien at, placerat aliquam orci.</p>
                    </div>
                        <div className={styles.societyLinks}>
                            <h2>Links</h2>
                            <ul>
                                <li>facebook.com/gaming</li>
                            </ul>
                        </div>
                </div>
            </div>
        </Suspense>    
    );
}

export default SocietyDetails;