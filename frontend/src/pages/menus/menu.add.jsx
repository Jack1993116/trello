import React from 'react';
import { connect } from 'react-redux';
import { setCreate, setCreateT } from '../../redux/reducers/util/util.action';

const AddMenu = ({setCreate, setCreateT, setUtil}) => {
	return (
		<div style={{position: "absolute", right: "25px", zIndex: 5}} >
			<div className="addmenu_header" >
				<p>Create</p>
				<button onClick={() => {setUtil(0)}}><span className="fa fa-times" /></button>
			</div>
			<div className="addmenu_content">
				<ul style={{padding: 0}} >
					<li onClick={() => {setCreate(true); setUtil(0);}} >
						<button >
							<span className="fa fa-user">
								<span className="addmenu_content_header">Create Board...</span>
							</span>
							<p className="addmenu_content_body">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
						</button>
					</li>
					<li onClick={() => {setCreateT(true); setUtil(0);}} >
						<button>
							<span className="fa fa-users">
								<span className="addmenu_content_header">Create Team...</span>
							</span>
							<p className="addmenu_content_body">A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</p>
						</button>
					</li>
					<li>
						<button>
							<span className="fa fa-user">
								<span className="addmenu_content_header">Create Business Board...</span>
							</span>
							<p className="addmenu_content_body">With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</p>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCreate: (data) => dispatch(setCreate(data)),
		setCreateT: (data) => dispatch(setCreateT(data))
	}
}

export default connect(null, mapDispatchToProps)(AddMenu);