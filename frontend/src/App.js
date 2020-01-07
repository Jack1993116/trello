import React from 'react';
import { BrowserRouter as Router, Route, Switch, PrivateRoute } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Header1 from './pages/header1';
import Home from './pages/home';
import Login from './pages/login';
import Singup from './pages/signup';

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
      </Switch>
    </Router>
  );
}

export default App;
