import "./global.css";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePageContent = lazy(() =>
  import("./sections/home-page/components/Content")
);

const HomePageNavbar = lazy(() =>
  import("./sections/home-page/components/Navbar")
);
const Login = lazy(() => import("./sections/login-page/Login"));

const MainApp = lazy(() => import("./sections/main-app/MainApp"));

const EventDetails = lazy(() => import("./sections/events-page/EventDetails"));

const Footer = lazy(() => import("./global-components/Footer"));

const SocietyDetails = lazy(() =>
  import("./sections/societies-page/SocietyDetails")
);

const JobDetails = lazy(() => import("./sections/jobs-page/JobDetails"));

const UserProfile = lazy(() =>
  import("./sections/profile-section/UserProfile")
);

const JobSearch = lazy(() => import("./sections/jobs-page/JobSearch"));

const EventSearch = lazy(() => import("./sections/events-page/EventSearch"));

const SocietySearch = lazy(() => import("./sections/societies-page/SocietySearch"));

const UpperNavbar = lazy(() => import("./sections/main-app/components/UpperNavbar"));

const LowerNavbar = lazy(() => import("./sections/main-app/components/LowerNavbar"));

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
                <UpperNavbar />
                <LowerNavbar />
                <EventDetails />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/societyDetails/:societyID"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <SocietyDetails />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/jobDetails/:jobID"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <JobDetails />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/userProfile/:username"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <UserProfile />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/eventSearch/:result"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <EventSearch />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/societySearch/:result"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <SocietySearch />
                <Footer />
              </Suspense>
            }
          ></Route>
          <Route
            path="/mainApp/jobSearch/:result"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UpperNavbar />
                <LowerNavbar />
                <JobSearch />
                <Footer />
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
