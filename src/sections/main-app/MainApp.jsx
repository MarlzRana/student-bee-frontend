import { Suspense, lazy } from 'react';
import styles from './MainApp.module.css';

const UpperNavbar = lazy(() => import('./components/UpperNavbar'));
const LowerNavbar = lazy(() => import('./components/LowerNavbar'));
function MainApp() {
  return (
    <main className={styles.mainApp}>
      <Suspense fallback={<div>Loading</div>}>
        <UpperNavbar />
        <LowerNavbar />
      </Suspense>
    </main>
  );
}

export default MainApp;
