import React, { lazy, Suspense, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { IUseRefDiv } from './utils/ActionHelper';
import Loader from './assets/loader.svg';

const HomeView = lazy(() => import('./pages/home/HomeView'));
const NavBar = lazy(() => import('./components/Navbar'));
const MovieView = lazy(() => import('./pages/movie/MovieView'));

function App() {
  const mainApp = useRef<HTMLDivElement>(null);
  const [refSideBar, setRefSideBar] = useState<IUseRefDiv | null>(null);
  const refSideBarBg = useRef<any>(null);

  let routes = (
    <Switch>
      <Route path="/movie/:id" component={MovieView} />
      <Route path="/" exact render={(props) => <HomeView {...props} />} />
      <Redirect to="/" />
    </Switch>
  );


  return (
    <div ref={mainApp} className="App">
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
          >
            <img src={Loader} alt="loading..." />
          </div>
        }
      >
        <Router>
          <NavBar
            refApp={mainApp}
            refSideBar={refSideBar}
            refSideBarBg={refSideBarBg}
          />
          {routes}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
