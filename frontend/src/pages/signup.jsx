import React, { useState, useEffect } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { connect } from 'react-redux';

import list from './home.part/language-list';
import GoolgeBtn from '../component/utils/google.button';
import Footer from '../component/footer/footer';
import CustomInput from '../component/utils/input.custom';
import CustomPassword from '../component/utils/password.custom';
import LoggerBtn from '../component/utils/logger.button';

import Log from '../component/log/log.container';

import Background from '../component/utils/background';

import {emailSignInStart} from '../redux/reducers/auth/auth.action'

const Singup = ({signup, isSignup, ...props}) => {
	const [lost, setLost] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	useEffect(()=>{
		if(isSignup) props.history.push(`/login`);
	})
	return (
		<Log>
			<MDBCard>
				<MDBCardBody style={{padding: "25px 40px"}}>
					<h5 align="center" style={{color: "#5E6C84"}}>Sign up to Trello</h5>
					<form>
						<CustomInput 
							type="text" 
							hint="Enter email" 
							onBlur={(e)=>{
								e.target.value.length?setLost(true):setLost(false)
							}} 
							onChange={(e) => {
									setEmail(e.target.value);
						}} />
						{lost&&<div>
							<CustomInput type="text" hint="Enter full name" onChange={(e) => {
								setName(e.target.value);
							}} />
							<CustomPassword onChange={(e) => {
								setPassword(e.target.value);
							}} />
							</div>
						}
						<p className="quiet tos"> By signing up, you confirm that you've read and accepted our <a href="/legal" target="_blank" >Terms of Service</a> and <a href="/privacy" target="_blank" >Privacy Policy</a>. </p>
						{lost
							?<LoggerBtn title="SignUp" onClick={()=>{
								signup({email, password});

							}} />
							:<LoggerBtn title="Continue" onClick={()=>{setLost(true)}} />
						}
					</form>
					<GoolgeBtn />
					<hr />
					<ul className="bottom-attention">
						<li><a href="/login">Already have account? Login</a></li>
					</ul>
				</MDBCardBody>
			</MDBCard>
		</Log>
	)
}

const mapStateToProps = (state) => {
	return ({
		isSignup: state.auth.isSignup
	})
}

const mapDispachToProps = (dispatch) => {
	return {
		signup: (data) => dispatch(emailSignInStart(data))
	}
}

export default connect(mapStateToProps, mapDispachToProps)(Singup);