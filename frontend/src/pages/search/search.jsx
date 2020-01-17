import React, { useState } from 'react';

import CustomInput from '../../component/utils/input.custom';

import './search.css';

const SearchContent = () => {
	return (
		<div className="search-content" >
			<CustomInput type="text" style={{borderRadius: "8px"}} />
			<p style={{margin: "5px"}} >Saved Searches</p>
			<hr />
			<div className="search-tips">
				<p className="search-tip-helper">
					<span style={{maxWidth: "424px"}} >
						Refine your search with operators like @member, #label, is:archived, and has:attachments.
					</span>
					<a className="search-tips-btn" href="#">Learn more</a>
				</p>
			</div>
		</div>
	)
}

export default SearchContent;