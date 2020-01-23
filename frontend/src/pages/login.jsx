import React, { useState, useEffect } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import list from './home.part/language-list';
import GoolgeBtn from '../component/utils/google.button';
import Footer from '../component/footer/footer';
import CustomInput from '../component/utils/input.custom';
import LoggerBtn from '../component/utils/logger.button';

import Log from '../component/log/log.container';

import {emailLoginStart} from '../redux/reducers/auth/auth.action';

import '../App.css';

const Login = ({login, isLogin, ...props}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	useEffect(()=>{
		if(isLogin){
			const token = localStorage.getItem('jwt_token');
			if (token != null) {
				const u_email = jwt_decode(token.slice(8)).email;
				props.history.push(`/${u_email}/main`);
			}
		} 
	})
	return (
		<Log>
			<MDBCard>
				<MDBCardBody style={{padding: "25px 40px"}}>
					<h5 align="center" style={{color: "#5E6C84"}}>Log in to Trello</h5>
					<form>
						<CustomInput type="text" hint="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
						<CustomInput type="password" hint="Password" onChange={(e)=>{setPassword(e.target.value)}} />
						<LoggerBtn title="Log In" onClick={()=>{login({email,password})}} />
					</form>
					<GoolgeBtn />
					<hr />
					<ul className="bottom-attention">
						<li><a href="">Can't log in?</a></li>
						<li><a href="signup">Sign up for an account</a></li>
					</ul>
				</MDBCardBody>
			</MDBCard>
			<ul className="bottom-attention" style={{marginTop: "10px"}}>
				<li><a href="">Privacy Policy</a></li>
				<li><a href="">Terms of Service</a></li>
			</ul>
		</Log>
	)
}

const mapStateToProps = (state) => {
	return ({
		isLogin: state.auth.isLogin
	})
}

const mapDispachToProps = (dispatch) => {
	return ({
			login: (data) => dispatch(emailLoginStart(data))
		})
}

export default connect(mapStateToProps, mapDispachToProps)(Login);