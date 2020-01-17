import React from 'react';

import Header0 from '../../pages/header0';
import SearchContent from '../../pages/search/search';

const SearchPage = () => {
	return (
		<div style={{backgroundColor: "#f4f5f7", height: "100vh"}} >
			<Header0 searchoff />
			<SearchContent />
		</div>
	)
}

export default SearchPage;