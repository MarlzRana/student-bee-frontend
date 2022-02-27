import { Suspense, lazy } from 'react';
import styles from './MainApp.modules.css';

function MainApp() {
  return (
    <main className={styles.mainApp}>
      <Suspense fallback={<div>Loading</div>}></Suspense>
    </main>
  );
}

export default MainApp;
