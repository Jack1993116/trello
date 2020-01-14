import React from 'react';
import {useMediaQuery} from 'react-responsive';

const HeaderBtn = ({icon, onClick, value, classE, ...props}) => {
	const medium = useMediaQuery({query: '(max-device-width: 715px)'});
	// console.log(medium);
	return(
		<div className="acenter" style={{display: "flex", marginTop: "-2px"}} {...props} >
			<button className={"acenter hd-btn "+classE} onClick={onClick} >
				{icon&&<span className={"fa "+icon} style={{width: "32px"}} />}
				{!medium&&value&&<span style={{textAlign: "center", maxWidth: "150px", padding: "0px 8px 0px 2px"}} >{value}</span>}
			</button>
		</div>
	)
}

export default HeaderBtn;