import React, { useState } from 'react';
import './sidenav.css';

const SideNav = ({children, sticky}) => {
	return (
		<div style={sticky?{position: "sticky", top: "0px"}:{}} >
			<nav style={{width: "210px", boxShadow: "none", marginTop: "40px", display: "block"}} >
				<ul className="navbar-nav">
					{children}
				</ul>
			</nav>
		</div>
	)
}

const SideNavItem = ({children}) => {
	return (
		<li className="nav-item">
			{children}
		</li>
	)
}

const SideNavLink = ({ target, value}) => {
	const [active, setActive] = useState(false);
	return (
		<a className={active?"sidenav-link-a sidenav-link-span":"sidenav-link-span"} href={void(0)} onClick={()=>{setActive(true)}} onBlur={()=>{setActive(false)}} >
			<span className="sidenav-link-span-1" >
				<span className="fa fa-user" style={active?{color: "#0079bf"}:{}} />
			</span>
			<span className="sidenav-link-span-2" style={active?{color: "#0079bf"}:{}} >{value}</span>
		</a>
	)
}

export { SideNav, SideNavItem, SideNavLink };