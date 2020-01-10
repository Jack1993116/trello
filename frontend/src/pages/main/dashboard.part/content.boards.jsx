import React from 'react';

const ContentBoard = ({children}) => {
	return (
		<div className="contentboard-flexing" style={{marginTop: "40px", width: "860px", paddingLeft: "64px"}} >
			<div style={{position: "sticky", top: "0px"}}>
				<div style={{display: "flex", position: "relative"}}>
					<span style={{width: "32px", height: "32px", lineHeight: "32px", fontSize: "20px"}} className="fa fa-user acenter" />
					<h5 className="acenter" style={{margin: "0", lineHeight: "32px"}} >Personal Boards</h5>
				</div>
			</div>
			<ul style={{display: "flex", flexWrap: "wrap", listStyle: "none", padding: "0"}} >
				{children}
			</ul>
		</div>
	)
}

export default ContentBoard;