import styles from "./MySections.module.css";
import { Suspense, lazy } from "react";
import placeholder from "../events-page/styling/bg.jpg";
import pic from "./components/DefaultProfilePic.jpg";

const Content = lazy(() => import("./components/Content"));

function MyJobs() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.mySectionPage}>
                <div className={styles.myHeader}>
                    <img src={pic} alt="" />
                    <h1>Akmal Rizal</h1>
                </div>
                <h2>My Jobs</h2>
                <div className={styles.myContainer}>
                    {/* <Content 
                        contentBg={placeholder}
                        contentTitle={"Noice"}
                    /> */}
                </div>
            </div>
        </Suspense>
    );
}

export default MyJobs;