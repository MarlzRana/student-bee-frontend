import styles from './Login.module.css';

import { useEffect, useState, lazy, Suspense } from 'react';
import Axios from 'axios';

const LoginWidget = lazy(() => import('./components/LoginWidget'));
const RegistrationWidget = lazy(() =>
  import('./components/RegistrationWidget')
);

function Login() {
  Axios.defaults.withCredentials = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    Axios.get('http://localhost:3001/loginSystem/isLoggedIn').then((res) => {
      if (res.data.isLoggedIn == true) setIsLoggedIn(true);
    });
  }, []);
  return (
    <div className={styles.page}>
      {!isLoggedIn && (
        <Suspense fallback={<div>Loading...</div>}>
          <RegistrationWidget />
          <LoginWidget isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Suspense>
      )}
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}

export default Login;
