import "./global.css";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageContent from "./sections/home-page/components/Content";
import LeftPanel from "./sections/profile-section/components/LeftPanel";

const HomePageNavbar = lazy(() =>
  import("./sections/home-page/components/Navbar")
);
const Login = lazy(() => import("./sections/login-page/Login"));

const leftPanel = lazy(() =>
  import("./sections/profile-section/components/LeftPanel")
);

const Jobs = lazy(() => import("./sections/jobs-page/Jobs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePageNavbar />
                <HomePageContent />
              </Suspense>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          ></Route>
          <Route
            path="/development"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LeftPanel />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
