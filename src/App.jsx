import './global.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageContent from './sections/home-page/components/Content';

const HomePageNavbar = lazy(() =>
  import('./sections/home-page/components/Navbar')
);
const Login = lazy(() => import('./sections/login-page/Login'));
const MainApp = lazy(() => import('./sections/main-app/MainApp'));

const LeftPanel = lazy(() => import("./sections/profile-section/components/LeftPanel"))
const Register = lazy(() => import("./sections/register-widget/RegisterWidget"))
 

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePageNavbar />
                <HomePageContent />
              </Suspense>
            }
          ></Route>
          <Route
            path='/login'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          ></Route>
          <Route
            path='/mainApp'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MainApp />
              </Suspense>
            }
          ></Route>
          <Route
            path='/development'
            element={<Suspense fallback={<div>Loading...</div>}><LeftPanel/></Suspense>}
          ></Route>
          <Route
            path='/register'
            element={<Suspense fallback={<div>Loading...</div>}><Register/></Suspense>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
