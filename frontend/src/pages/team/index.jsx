import React from 'react';
import { Tabs, Tab} from 'react-bootstrap';

import './team.css';

import Header0 from '../header0';

const Team = () => {
	return (
		<div style={{backgroundColor: "#f4f5f7"}} >
		<Header0 />
			<div className="team-page-header">
				<div style={{display: "flex"}} >
					<a className="profile-image" style={{borderRadius: "4px"}} >
						<span className="fa fa-users profile-image-icon" />
						<span className="profile-image-change">Change Profile</span>
					</a>
				</div>
			</div>
			<Tabs defaultActiveKey="boards" style={{justifyContent:"center"}} >
				<Tab eventKey="boards" title="Boards">a</Tab>
				<Tab eventKey="members" title="Members">b</Tab>
				<Tab eventKey="settings" title="Settings">c</Tab>
				<Tab eventKey="bussiness" title="Bussiness Class">d</Tab>
			</Tabs>
		</div>
	)
}

export default Team;