import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
 * @ Component Imported
 * */
import HomeDefault from './pages/home/HomeDefault';

import Bachur from './pages/portfolio/details/bachur';
import Before from './pages/portfolio/details/before';
import Young from './pages/portfolio/details/young';
import LaterYears from './pages/portfolio/details/lateryears';
import FirstYears from './pages/portfolio/details/firstyears';
import Mossiach from './pages/portfolio/details/mossiach';

import AboutPage from './pages/about';

import ContactPage from './pages/contact';
import ErrorPage from './pages/404Error';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={ContactPage}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/before'}`}
            component={Before}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/bachur'}`}
            component={Bachur}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/young'}`}
            component={Young}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/lateryears'}`}
            component={LaterYears}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/firstyears'}`}
            component={FirstYears}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/bachur'}`}
            component={Bachur}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/about'}`}
            component={AboutPage}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/'}`}
            component={HomeDefault}
          />

          <Route exact component={ErrorPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
