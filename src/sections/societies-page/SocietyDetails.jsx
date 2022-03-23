import styles from './SocietyDetails.module.css';
import { Suspense, lazy } from 'react';

function SocietyDetails() {
    return(
        <Suspense>
            <div className={styles.societyDetailsPage}>
                test
            </div>
        </Suspense>
    );
}

export default SocietyDetails;