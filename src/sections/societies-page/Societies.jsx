import styles from './Societies.module.css';
import { Suspense, lazy } from 'react';
import img from './styling/placeholder.jpg';

const Society = lazy(() => import('./components/Society'));

function Societies() {
    return(
        <div className={styles.societiesPage}>
            <div className={styles.societiesHeading}>
                <h1>Societies</h1>
                <p>Spice up your university life!</p>
            </div>

            <div className={styles.societiesContainer}>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
                <Society societyName="coomers" societyImage={img}/>
            </div>
        </div>
    );
}

export default Societies;