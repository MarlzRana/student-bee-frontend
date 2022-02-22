import styles from './Login.module.css';

import { lazy, Suspense } from 'react';

const LoginWidget = lazy(() => import('./components/LoginWidget'));
const RegistrationWidget = lazy(() =>
  import('./components/RegistrationWidget')
);

function Login() {
  return (
    <div class={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <RegistrationWidget />
        <LoginWidget />
      </Suspense>
    </div>
  );
}

export default Login;
