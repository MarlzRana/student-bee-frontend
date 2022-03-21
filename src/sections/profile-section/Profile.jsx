import styles from './Profile.module.css';
import { Suspense, lazy } from "react";

const TweetUI = lazy(() => import('./components/TweetUI'));
const Reminder = lazy(() => import('./components/Reminder'));
const LeftPanel = lazy(() => import('./components/LeftPanel'));
const NotificationPanel = lazy(() => import('./components/NotificationPanel'));

function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.home}>
                <div className={styles.left}>
                    <LeftPanel/>
                </div>
                <div className={styles.middle}>
                    <div className={styles.homeWidgets}>
                        <Reminder/>
                    </div>
                    <TweetUI/>
                </div>
                <div className={styles.right}>
                    <NotificationPanel/>
                </div>        
            </div>
        </Suspense>
    );
}

export default Home;