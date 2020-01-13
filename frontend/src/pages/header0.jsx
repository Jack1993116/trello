import React from 'react';
import { MDBNavbar, MDBNavItem, MDBNavbarBrand, MDBNavbarNav, MDBNavLink } from 'mdbreact';

import LogoBtn from '../component/utils/logo.button';
import HeaderBtn from '../component/utils/header.button';

const Header0 = ({color="info-color-dark", fixed, transparent}) => {
	return (
		<MDBNavbar color={color} style={{height: "40px", padding: "4px"}} fixed={fixed} transparent={transparent} >
			<LogoBtn />
			<div className="hd-btn-group-s">
				<HeaderBtn icon="fa-home" />
				<HeaderBtn icon="fa-user" value="Boards" />
				<HeaderBtn icon="fa-user" value="Board" />
			</div>
			<div className="hd-btn-group-s">
				<HeaderBtn icon="fa-plus" />
				<HeaderBtn icon="fa-info" />
				<HeaderBtn icon="fa-bell" classE="red" />
				<HeaderBtn icon="" value="JR" classE="circle" />
			</div>
		</MDBNavbar>
	)
}

export default Header0;