import React from 'react';
import './style.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Briefs from './component/Briefs';
import Videos from './component/Videos';
import City from './component/City';
import India from './component/India';
import World from './component/World';
import Business from './component/Business';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Briefs} />
          <Route exact path="/video" component={Videos} />
          <Route excat path="/city" component={City} />
          <Route excat path="/india" component={India} />
          <Route excat path="/world" component={World} />
          <Route excat path="/business" component={Business} />

          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
