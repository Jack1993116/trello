import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderSearcher = () => {
	const [focused, setFocused] = useState(false);
	return (
		<div style={{position: "relative"}}  onFocus={()=>{setFocused(true)}} onBlur={()=>{setFocused(false)}} >
			<input className={`header-searcher-input header ${focused?"stretching":""}`} />
			<span className="header-searcher-input-r" >
				<Link to="/search/:q" className={`${!focused?"none":""}`} style={{color: "gray"}} ><span className="fas fa-arrows-alt-h icons" /></Link>
				<span className={`fa icons ${focused?"fa-times":"fa-search"}`} />
			</span>
		</div>
	)
}

export default HeaderSearcher;