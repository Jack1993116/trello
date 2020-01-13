import React from 'react';
import Header0 from '../header0';
import DetailBoard from './detailboard';

const Detail = () => {
	return (
		<div style={{backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1367x2048/e3f86fba993a9f7bf2ab03234b25a022/photo-1568313081041-dbd174f69e3b")`, height: "100vh"}} >
			<Header0 fixed="top" transparent />
			<DetailBoard />
		</div>
	)
}

export default Detail;