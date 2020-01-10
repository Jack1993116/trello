import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogin === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const mapStateToProps = (state) =>{
	return {
		isLogin: state.auth.isLogin
	}
}

export default connect(mapStateToProps)(PrivateRoute);