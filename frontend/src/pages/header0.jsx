import React from 'react';
import { MDBNavbar, MDBNavItem, MDBNavbarBrand, MDBNavbarNav, MDBNavLink } from 'mdbreact';

import LogoBtn from '../component/utils/logo.button';
import HeaderBtn from '../component/utils/header.button';
import HeaderSearcher from '../component/utils/header.seacher';

const Header0 = ({color="info-color-dark", fixed, transparent, ...props}) => {
	return (
		<MDBNavbar color={color} style={{height: "40px", padding: "4px"}} fixed={fixed} transparent={transparent} >
			<LogoBtn />
			<div className="hd-btn-group-s">
				<HeaderBtn icon="fa-home" url="/" />
				<HeaderBtn icon="fa-user" value="Boards" url="/main" />
				<HeaderSearcher />
			</div>
			<div className="hd-btn-group-s">
				<HeaderBtn icon="fa-plus" url="/main" />
				<HeaderBtn icon="fa-info" url="/main" />
				<HeaderBtn icon="fa-bell" url="/main" classE="red" />
				<HeaderBtn icon="" value="JR" classE="circle" url="/main" />
			</div>
		</MDBNavbar>
	)
}

export default Header0;