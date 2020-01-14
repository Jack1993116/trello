import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
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
        <PrivateRoute path="/main" component={Main} />
        <PrivateRoute path="/:title/detail/:ids" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
