import React from 'react';
import { Link } from 'react-router-dom';

import './content.board.css';

const ContentBoard = ({title, children, icon="user", team}) => {
	return (
		<div className="contentboard-flexing" style={{marginTop: "40px", paddingLeft: "64px"}} >
			<div style={{position: "sticky", top: "0px"}}>
				<div style={{display: "flex", position: "relative"}}>
					<span style={{width: "32px", height: "32px", lineHeight: "32px", fontSize: "20px"}} className={`far fa-${icon} fa fas acenter`} />
					<h5 className="acenter" style={{margin: "0", lineHeight: "32px"}} >{title}</h5>
					{team&&
						<div>
							<Link to="/team">
								<button className="team-btn"><span className="fa fa-user" style={{marginRight: "5px"}} />Boards</button>
							</Link>
							<Link to="/team">
								<button className="team-btn"><span className="fa fa-user" style={{marginRight: "5px"}} />Members(1)</button>
							</Link>
							<Link to="/team">
								<button className="team-btn"><span className="fas fa-cog" style={{marginRight: "5px"}} />Settings</button>
							</Link>
							<Link to="/team">
								<button className="team-btn-upgrade" ><span className="fa fa-user" style={{marginRight: "5px"}} />Upgrade</button>
							</Link>
						</div>
					}
				</div>
			</div>
			<ul style={{display: "flex", listStyle: "none", padding: "0", flexWrap: "wrap"}} >
				{children}
			</ul>
		</div>
	)
}

export default ContentBoard;