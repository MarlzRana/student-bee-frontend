import { Suspense, lazy } from 'react';
import styles from './MainApp.module.css';
const UpperNavbar = lazy(() => import('./components/UpperNavbar'));
function MainApp() {
  return (
    <main className={styles.mainApp}>
      <Suspense fallback={<div>Loading</div>}>
        <UpperNavbar />
      </Suspense>
    </main>
  );
}

export default MainApp;
