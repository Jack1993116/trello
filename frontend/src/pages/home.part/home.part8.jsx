import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import {changeLang} from '../../redux/reducers/lang/lang.action';

import '../../App.css';
import list from './language-list'

const Part8 = ({pt, change}) => {
	
	return (
		<div style={{backgroundImage: `url(https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/97db7688a52a697ea9376a5f0fe5d98f/trellians-2x-2.png)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "1332px 393px" , height: "393px", textAlign: "center"}}>
			<MDBContainer>
				<MDBRow style={{ padding: "80px 10px"}}>
					<MDBCol md="8" lg="6" className="offset-lg-3 offset-md-2">
						<h3>{pt.h3}</h3>
						<p>{pt.p}</p>
						<button type="button" className="success-color btn-lg btnP1" style={{outline: "none", width: "280px", border: "none", color: "white", fontSize: "1.5625rem"}} >{pt.btn} </button>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<MDBContainer style={{marginTop: "150px"}}>
				<MDBRow center>
					<select style={{backgroundColor: `rgba(255, 255, 255, 0.5)`, color: "#959da1", border: "2px solid #edeff0", fontSize: "14pt", padding: ".5em"}} onChange={(e)=>{change(e.target.value)}}>
						<option value="choose-one" id="choose" disabled={true}>Select your language…</option>
						{
							list.map((lang, id)=>{
								return (
									<option key={id} selected={lang==="English (UK)"?true:false}>{lang}</option>
								)
							})
						})}
					</select>
				</MDBRow>
				<MDBRow center>
					<ul className="global-footer-list"> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/templates" >Templates</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/pricing" >Pricing</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/platforms" >Apps</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="https://www.atlassian.com/company/careers/trello" >Jobs</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="http://blog.trello.com/">Blog</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="http://developers.trello.com" >Developers</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/about" >About</a> </li> 
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="http://help.trello.com/">Help</a> </li>  
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/legal">Legal</a> </li>  
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="#" >Cookie Settings</a> </li>  
						<li className="global-footer-list-item"> <a className="global-footer-list-item-link quiet" href="/privacy" >Privacy</a> </li>  
					</ul>
				</MDBRow>
				<MDBRow center>
					  <MDBCol md="4">
							<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" style={{paddingBottom: "20px"}} width="150" />
							<p align="center">&nbsp;© Copyright 2020. All rights reserved. </p>
					  </MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		change: (lang) => dispatch(changeLang(lang))
	}
}

export default connect(null, mapDispatchToProps)(Part8);