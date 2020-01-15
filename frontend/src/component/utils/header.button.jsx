import React from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';

const HeaderBtn = ({icon, onClick, value, classE, url, ...props}) => {
	const medium = useMediaQuery({query: '(max-device-width: 715px)'});
	return(
		<Link to={url} >
			<div className="acenter" style={{display: "flex"}} {...props} >
				<button className={"acenter hd-btn "+classE} onClick={onClick} >
					{icon&&<span className={"fa "+icon} style={{width: "32px"}} />}
					{!medium&&value&&<span style={{textAlign: "center", maxWidth: "150px", padding: "0px 8px 0px 2px"}} >{value}</span>}
				</button>
			</div>
		</Link>
	)
}

export default HeaderBtn;