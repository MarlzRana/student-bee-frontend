import { lazy, Suspense, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styles from './Login.module.css';

const LoginWidget = lazy(() => import('./components/LoginWidget'));
const RegisterWidget = lazy(() => import('./components/RegisterWidget'));
const HomePageNavbar = lazy(() => import('../home-page/components/Navbar'));

function Login() {
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    const checkIsUserLogged = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + '/loginSystem/isLoggedIn'
      );
      if (res.data.isLoggedIn === true) {
        routerNavigator('/mainApp/home');
      }
    };
    checkIsUserLogged();
  }, [routerNavigator]);
  const subPageName = useParams().subPage;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageNavbar />
      <div className={styles.border}></div>
      <div className={styles.widget}>
        {subPageName === 'register' ? <RegisterWidget /> : <></>}
        {subPageName === 'login' ? <LoginWidget /> : <></>}
      </div>
      <div className={styles.botBorder}></div>
    </Suspense>
  );
}

export default Login;
