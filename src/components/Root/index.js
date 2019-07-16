import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../Main';
import Character from '../Character/Profile';
import './style.scss';
import View from '../View';

const PageNotFound = () => (
  <View>
    <h1 className="align-center">Page not found :/</h1>
  </View>
);

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/character/:id" exact component={Character} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Root;
