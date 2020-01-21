import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Header1 from './pages/header1';
import Home from './pages/home';
import Login from './pages/login';
import Singup from './pages/signup';
import Main from './pages/main';
import Detail from './pages/detail';
import SearchPage from './pages/search';
import Team from './pages/team';

import PrivateRoute from './api/utils/private.route';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        	<Header1 />
        	<Home />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Singup} />
        <PrivateRoute exact path="/search/:q" component={SearchPage} />
        <PrivateRoute exact path="/:user/main" component={Main} />
        <PrivateRoute path="/:title/detail/:ids" component={Detail} />
        <PrivateRoute path="/team" component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
