import React from 'react';
import DetailHeader from './detailheader';
import Note from '../../component/note/note';

const DetailBoard = () => {
	return (
		<div style={{position:"relative", top: "32px"}} >
			<DetailHeader title="Dashboard" />
			<div className="board-canvas">
				<Note />
			</div>
		</div>
	)
}

export default DetailBoard;