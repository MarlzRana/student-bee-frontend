import './global.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePageNavbar = lazy(() =>
  import('./sections/home-page/components/Navbar')
);
const Login = lazy(() => import('./sections/login-page/Login'));

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
