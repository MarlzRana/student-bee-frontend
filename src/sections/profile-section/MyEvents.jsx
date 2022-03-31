import styles from "./MySections.module.css";
import { Suspense, lazy } from "react";
import pic from "./components/DefaultProfilePic.jpg";

const Content = lazy(() => import("./components/Content"));

function MyEvents() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.mySectionPage}>
                <div className={styles.myHeader}>
                    <img src={pic} alt="" />
                    <h1>Akmal Rizal</h1>
                </div>
                <h2>My Events</h2>
                <div className={styles.myContainer}>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        </Suspense>
    );
}

export default MyEvents;