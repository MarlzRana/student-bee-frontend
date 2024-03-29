import { lazy, Suspense, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import styles from "./Login.module.css";

const LoginWidget = lazy(() => import("./components/LoginWidget"));
const RegisterWidget = lazy(() => import("./components/RegisterWidget"));
const HomePageNavbar = lazy(() => import("../home-page/components/Navbar"));
const Footer = lazy(() => import("../../global-components/Footer"));

function Login() {
  const routerNavigator = useNavigate();
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    const checkIsUserLogged = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/isLoggedIn"
      );
      console.log(res);
    };
    checkIsUserLogged();
  }, [routerNavigator]);
  const subPageName = useParams().subPage;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageNavbar />
      <div className={styles.loginContainer}>
        <div className={styles.border}></div>
        <div className={styles.widget}>
          {subPageName === "register" ? <RegisterWidget /> : <></>}
          {subPageName === "login" ? <LoginWidget /> : <></>}
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}

export default Login;
