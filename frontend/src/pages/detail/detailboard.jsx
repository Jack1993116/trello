import React from 'react';
import { connect } from 'react-redux';

import DetailHeader from './detailheader';
import Note from '../../component/note/note';

const DetailBoard = ({lists, ...props}) => {
	return (
		<div style={{position:"relative", top: "32px"}} >
			<DetailHeader />
			<div className="board-canvas">
				{Object.keys(lists).map((item, index)=>{
					return <Note key={item} header={item} items={lists[item]} />
				})}
			</div>
		</div>
	)
}

export default (DetailBoard);