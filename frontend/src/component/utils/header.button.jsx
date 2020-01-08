import React from 'react';

const HeaderBtn = ({icon, onClick, value, classE}) => {
	return(
		<div className="acenter" style={{display: "flex", marginTop: "-2px"}}>
			<button className={"acenter hd-btn "+classE} onClick={onClick} >
				{icon&&<span className={"fa "+icon} style={{width: "32px"}} />}
				{value&&<span style={{maxWidth: "150px", padding: "0px 8px 0px 2px"}} >{value}</span>}
			</button>
		</div>
	)
}

export default HeaderBtn;