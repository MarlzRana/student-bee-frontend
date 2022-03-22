import { useParams, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Axios from 'axios';
import styles from './MainApp.module.css';

const UpperNavbar = lazy(() => import('./components/UpperNavbar'));
const LowerNavbar = lazy(() => import('./components/LowerNavbar'));
const Events = lazy(() => import('../events-page/Events'));
const EventDetails = lazy(() => import('../events-page/EventDetails'));
const Home = lazy(() => import('../profile-section/Profile'));
const EditProfile = lazy(() => import('../profile-section/EditProfile'));

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
        {subPageName === 'home' ? <Home /> : <></>}
        {subPageName === 'events' ? <Events /> : <></>}
        {subPageName === 'eventDetails' ? <EventDetails /> : <></>}
        {subPageName === 'editProfile' ? <EditProfile /> : <></>}
      </Suspense>
    </main>
  );
}

export default MainApp;
