import styles from './Login.module.css';

import { lazy, Suspense, useState } from 'react';

const LoginWidget = lazy(() => import('./components/LoginWidget'));
const RegisterWidget = lazy(() => import("../register-widget/RegisterWidget"));
const HomePageNavbar = lazy(() =>
  import("../home-page/components/Navbar")
);

function Login() {

  const [register, setRegister] = useState(true)

  return (
    <body>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageNavbar/>
        <div className={styles.border}></div>
        <div className={styles.widget}>
          {register ? (<RegisterWidget reg={register} setReg={setRegister}/>) : (<LoginWidget reg={register} setReg={setRegister}/>)}
        </div>  
        <div className={styles.botBorder}></div>
      </Suspense>
    </body>
  );
}

export default Login;
