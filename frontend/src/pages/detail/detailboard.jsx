import React from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import DetailHeader from './detailheader';
import Note from '../../component/note/note';
import AddNote from '../../component/note/note.add';

const DetailBoard = ({lists, ids, accessable, title_1, ...props}) => {
	return (
		<DndProvider backend={Backend} >
			<div style={{position:"relative", top: "40px", display: "flex", flexDirection: "column"}} className="detail_cnt" >
				<DetailHeader accessable_1={accessable} title_1={title_1} />
				<div className="board-canvas" >
					<div id="div_board">
						{
							Object.keys(lists).map((item, index)=>{
								return <Note ids={ids} key={item} header={item} items={lists[item]} order={index} />
							})
						}
						<AddNote />
					</div>
				</div>
			</div>
		</DndProvider>
	)
}

export default (DetailBoard);