import React, { useState } from 'react';

const HeaderSearcher = () => {
	const [focused, setFocused] = useState(false);
	return (
		<div style={{position: "relative"}}  onFocus={()=>{setFocused(true)}} onBlur={()=>{setFocused(false)}} >
			<input className={`header-searcher-input header ${focused?"stretching":""}`} />
			<span className="header-searcher-input-r" >
				<a href="/search/:q" className={`${!focused?"none":""}`} style={{color: "gray"}} ><span className="fas fa-arrows-alt-h icons" /></a>
				<span className={`fa icons ${focused?"fa-times":"fa-search"}`} />
			</span>
		</div>
	)
}

export default HeaderSearcher;