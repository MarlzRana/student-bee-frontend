import styles from "./MySections.module.css";
import { Suspense, lazy } from "react";
import societyPicCollection from "../societies-page/components/societyPicCollection";
import pic from "./components/DefaultProfilePic.png";

const Content = lazy(() => import("./components/Content"));

function MySocieties() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.mySectionPage}>
                <div className={styles.myHeader}>
                    <img src={pic} alt="" />
                    <h1>Akmal Rizal</h1>
                </div>
                <h2>My Societies</h2>
                <div className={styles.myContainer}>
                    <Content 
                        contentType="society"
                        contentBg={societyPicCollection[(Math.floor(Math.random() * societyPicCollection.length))]}
                        contentTitle={"Noice"}
                    />
                </div>
            </div>
        </Suspense>
    );
}

export default MySocieties;