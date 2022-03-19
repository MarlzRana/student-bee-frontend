import { useParams, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Axios from 'axios';
import styles from './MainApp.module.css';

const UpperNavbar = lazy(() => import('./components/UpperNavbar'));
const LowerNavbar = lazy(() => import('./components/LowerNavbar'));
const Events = lazy(() => import('../events-page/Events'));
const EventDetails = lazy(() => import('../events-page/EventDetails'));

function MainApp() {
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    const checkIsUserLogged = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + '/loginSystem/isLoggedIn'
      );
      if (res.data.isLoggedIn === false) {
        routerNavigator('/loginSystem/login');
      }
    };
    checkIsUserLogged();
  }, [routerNavigator]);
  const subPageName = useParams().subPage;
  return (
    <main className={styles.mainApp}>
      <Suspense fallback={<div>Loading</div>}>
        <UpperNavbar />
        <LowerNavbar />
        {subPageName === 'home' ? <></> : <></>}
        {subPageName === 'events' ? <Events /> : <></>}
        {subPageName === 'eventDetails' ? <EventDetails /> : <></>}
      </Suspense>
    </main>
  );
}

export default MainApp;
