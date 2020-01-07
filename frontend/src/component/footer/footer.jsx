import React from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

const Footer = ({list}) => {
	return (
		<MDBContainer style={{marginTop: "50px"}}>
				<MDBRow center>
					<select style={{backgroundColor: `rgba(255, 255, 255, 0.5)`, color: "#959da1", border: "2px solid #edeff0", fontSize: "10pt", padding: ".5em"}}>
						<option value="choose-one" id="choose" disabled={true}>Select your language…</option>
						{
							list.map((lang, id)=>{
								return (
									<option key={id}>{lang}</option>
								)
							})
						})}
					</select>
				</MDBRow>
				<hr style={{maxWidth: "400px"}} />
				<MDBRow center>
					<MDBCol md="2" sm="2" size="2">
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" style={{paddingBottom: "20px"}} width="150" />
					</MDBCol>
				</MDBRow>
				<MDBRow center>
					<ul className="global-footer-list"> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/templates" >Templates</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/pricing" >Pricing</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/platforms" >Apps</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="https://www.atlassian.com/company/careers/trello" >Jobs</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" target="_blank"  href="http://blog.trello.com/">Blog</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="http://developers.trello.com" >Developers</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/about" >About</a> </li> 
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="http://help.trello.com/">Help</a> </li>  
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/legal">Legal</a> </li>  
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="#" >Cookie Settings</a> </li>  
						<li className="global-footer-list-item1"> <a className="global-footer-list-item-link quiet" href="/privacy" >Privacy</a> </li>  
					</ul>
				</MDBRow>
			</MDBContainer>
	)
}

export default Footer;