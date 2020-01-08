import React, { Fragment, useState, useEffect } from 'react';
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse } from 'mdbreact';
import Logo from '../component/logo';

const Header1 = () => {
	const [alpha, setAlpha] = useState(0);
	useEffect(() => {
		window.onscroll =()=>{
    		window.scrollY >= 100
    		? setAlpha(1)
    		: setAlpha(0);
  		}
	});
	return (
		<div>
			<MDBNavbar style={!alpha?{padding: "5px 16px", boxShadow: "none"}:{padding: "5px 16px"}} scrolling transparent color="info-color-dark" dark fixed="top" expand="md">
				<MDBNavbarBrand style={{marginRight: "0px"}}>
					<MDBNavLink to="/">
						<Logo />
					</MDBNavLink>
				</MDBNavbarBrand>
				<MDBNavbarNav right style={{flexDirection: "row"}}>
					<MDBNavItem>
						<MDBNavLink to="/main">Log In0</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink to="/login">Log In</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem style={{backgroundColor: "white", borderRadius: "5px"}}>
						<MDBNavLink to="/signup" style={{color: "#0079bf"}}>
							Sign Up
						</MDBNavLink>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBNavbar>
		</div>
	);
}

export default Header1;