import React from 'react';

import CustomInput from '../utils/input.custom';
import CustomTextarea from '../utils/textarea.custom';
import PrimaryBtn from '../utils/primary.button';

import '../../App.css';

const Invite = ({right, setShow}) => {
	console.log(right);
	return (
		<div style={{position: "absolute", right: `${right+"px"}`, zIndex: 5, backgroundColor: "white", width:"350px", padding: "10px"}} >
			<div className="addmenu_header" >
				<p>Invite to Board</p>
				<button><span className="fa fa-times" onClick={() => setShow(false)} /></button>
			</div>
			<div className="addmenu_content">
				<CustomInput hint="Email Address or Name" />
				<CustomTextarea value="I'm working on this project in Trello and wanted to share it with you!" />
				<PrimaryBtn size="sm" disabled >Send Invitation</PrimaryBtn>
				<hr />
				<div>
					<a>
						<span className="fa fa-link" />
						<span>Invite with Link</span>
					</a>
					<a href="#" style={{float: "right"}} >Create Link</a>
					<p style={{fontSize: "12px", lineHeight: "12px", margin: "5px, auto"}} >Anyone with link can join as board member</p>
				</div>
			</div>
		</div>
	)
}

export default Invite;