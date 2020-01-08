import React from 'react';

const SideNav = ({children, sticky}) => {
	return (
		<div style={sticky?{position: "sticky", top: "0px"}:{}} >
			<nav className="navbar" style={{width: "200px", boxShadow: "none", marginTop: "40px"}} >
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

const SideNavLink = ({target}) => {
	return (
		<a />
	)
}

export { SideNav, SideNavItem };