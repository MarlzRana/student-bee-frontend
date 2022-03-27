import "./global.css";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageContent from "./sections/home-page/components/Content";

const HomePageNavbar = lazy(() =>
  import("./sections/home-page/components/Navbar")
);
const Login = lazy(() => import("./sections/login-page/Login"));

const MainApp = lazy(() => import("./sections/main-app/MainApp"));

const EventDetails = lazy(() => import("./sections/events-page/EventDetails"));

const Footer = lazy(() =>  import("./global-components/Footer"));

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
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/loginSystem/:subPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/:subPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MainApp />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/events/viewEvent/:eventID"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EventDetails />
              </Suspense>
            }
          ></Route>
          <Route
            path="/development"
            element={<Suspense fallback={<div>Loading...</div>}></Suspense>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
