import React from 'react';
import { connect } from 'react-redux';

import DetailHeader from './detailheader';
import Note from '../../component/note/note';
import AddNote from '../../component/note/note.add';

const DetailBoard = ({lists, ids, accessable, title_1, ...props}) => {
	return (
		<div style={{position:"relative", top: "40px"}} >
			<DetailHeader accessable_1={accessable} title_1={title_1} />
			<div className="board-canvas">
				{
					Object.keys(lists).map((item, index)=>{
						return <Note ids={ids} key={item} header={item} items={lists[item]} />
					})
				}
				<AddNote />
			</div>
		</div>
	)
}

export default (DetailBoard);