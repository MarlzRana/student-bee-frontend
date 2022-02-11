import { Suspense, lazy } from 'react';
import './global.css';
const HomePageNavbar = lazy(() =>
  import('./sections/home-page/components/Navbar')
);

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageNavbar />
      </Suspense>
    </div>
  );
}

export default App;
