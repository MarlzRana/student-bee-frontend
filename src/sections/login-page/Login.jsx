import styles from './Login.module.css';

import { useEffect, lazy, Suspense } from 'react';
import Axios from 'axios';

const LoginWidget = lazy(() => import('./components/LoginWidget'));
const RegistrationWidget = lazy(() =>
  import('./components/RegistrationWidget')
);

function Login() {
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <RegistrationWidget />
        <LoginWidget />
      </Suspense>
    </div>
  );
}

export default Login;
