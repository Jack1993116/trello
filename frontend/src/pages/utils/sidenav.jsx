import React from 'react';

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

const SideNavLink = ({target}) => {
	return (
		<a />
	)
}

export { SideNav, SideNavItem };