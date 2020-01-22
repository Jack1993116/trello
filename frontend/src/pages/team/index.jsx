import React from 'react';
import { Tabs, Tab} from 'react-bootstrap';

import './team.css';

import Header0 from '../header0';
import ProfileForm from './team.profile.form';

const Team = () => {
	const [show, setShow] = React.useState(false);
	return (
		<div style={{backgroundColor: "#f4f5f7"}} >
			<Header0 />
			<div className="team-page-header">
				<div style={{display: "flex"}} >
					<a className="profile-image" style={{borderRadius: "4px"}} >
						<span className="fa fa-users profile-image-icon" />
						<span className="profile-image-change">Change Profile</span>
					</a>
					<div className="tabbed-pane-header-details">
						<div>
							<h1 style={{display: "inline-block", fontSize:"24px"}} >"Team"</h1>
							<span style={{fontSize: "12px", marginLeft: "10px"}} ><span className="fa fa-lock" style={{marginRight: "5px"}} />Private</span>
							<p>Description</p>
							{!show&&<a className="button-link" >
										<span onClick={() => {setShow(true)}} ><span className="fa fa-lock icon-sm-profile" />Edit Team Profile</span>
									</a>
							}
						</div>
						{show&&<ProfileForm close={setShow} />}
					</div>
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