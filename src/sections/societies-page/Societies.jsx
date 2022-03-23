import styles from './Societies.module.css';
import { Suspense, lazy, useState } from 'react';
import img from './styling/placeholder2.jpg';

const Society = lazy(() => import('./components/Society'));

function Societies() {
    const [isAddSocietyWidgetShowing, setIsAddSocietyWidgetShowing] = useState(false);
    return(
        <div className={styles.societiesPage}>
            <div className={styles.societiesHeading}>
                <h1>Societies</h1>
                <p>Spice up your university life!</p>
            </div>
            <div className={styles.societiesContainer}>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
                <Society societyName="Gaming" societyImage={img}/>
            </div>
            <button
                title='Add your own society!'
                onClick={() => setIsAddSocietyWidgetShowing(true)}
                className={styles.addSociety}
            >
                +
            </button>
        </div>
    );
}

export default Societies;