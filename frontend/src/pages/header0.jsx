import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavItem, MDBNavbarBrand, MDBNavbarNav, MDBNavLink } from 'mdbreact';

import LogoBtn from '../component/utils/logo.button';
import HeaderBtn from '../component/utils/header.button';
import HeaderSearcher from '../component/utils/header.seacher';
import AddMenu from './menus/menu.add';
import MenuHint from './menus/menu.hint';

import {logout} from '../redux/reducers/auth/auth.action';

const Header0 = ({color="info-color-dark", fixed, transparent, searchoff, logout, ...props}) => {
	const [util, setUtil] = React.useState(0);
	return (
		<div>
			<MDBNavbar color={color} style={{height: "40px", padding: "4px"}} fixed={fixed} transparent={transparent} >
				<LogoBtn />
				<div className="hd-btn-group-s">
					<HeaderBtn icon="fa-home" url="/" />
					<HeaderBtn icon="fa-user" value="Boards" url="/login" />
					{!searchoff&&<HeaderSearcher />}
				</div>
				<div className="hd-btn-group-s">
					<HeaderBtn icon="fa-plus" url="#" onClick={() => {setUtil(1)}} />
					<HeaderBtn icon="fa-info" url="#" onClick={() => {setUtil(2)}} />
					<HeaderBtn icon="fa-bell" url="#" />
					<HeaderBtn icon="" value="JR" classE="circle" url="#" onClick={() => {logout()}} />
				</div>
			</MDBNavbar>
			{(util==1)&&<AddMenu setUtil={setUtil} />}
			{(util==2)&&<MenuHint setUtil={setUtil} />}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	}
}

export default connect(null, mapDispatchToProps)(Header0);