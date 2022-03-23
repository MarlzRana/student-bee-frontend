import styles from './Societies.module.css';
import { Suspense, lazy, useState } from 'react';
import img from './styling/placeholder2.jpg';

const Society = lazy(() => import('./components/Society'));
const AddSocietyWidget = lazy(() => import('./components/AddSocietyWidget'));

function Societies() {
    const [isAddSocietyWidgetShowing, setIsAddSocietyWidgetShowing] = useState(false);
    return(
        <Suspense fallback={<div>Loading...</div>}>
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
                {isAddSocietyWidgetShowing ? (
                <AddSocietyWidget
                    setIsAddSocietyWidgetShowing={setIsAddSocietyWidgetShowing}
                />
                ) : (
                    <></>
                )}
                {!isAddSocietyWidgetShowing ? (<button
                    title='Add your own society!'
                    onClick={() => setIsAddSocietyWidgetShowing(true)}
                    className={styles.addSociety}
                >
                    +
                </button>
                ) : (
                    <></>
                )}
            </div>
        </Suspense>    
    );
}

export default Societies;