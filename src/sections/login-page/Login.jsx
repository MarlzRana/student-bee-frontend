import styles from './Login.module.css';

import { lazy, Suspense } from 'react';

const LoginWidget = lazy(() => import('./components/LoginWidget'));

function Login() {
  return (
    <div class={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginWidget />
      </Suspense>
    </div>
  );
}

export default Login;
