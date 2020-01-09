import React from 'react';
import './boardlist.item.css';

const BoardListItem = () => {
	return (
		<li className="board-list-item" >
			
		</li>
	)
}

const BoardListItemNew = ({onClick}) => {
	return (
		<li style={{display: "list-item"}} className="board-list-item" >
			<div className="board-tile mod-add">
				<p><span>Create new board</span></p>
			</div>
		</li>
	)
}

export { BoardListItem, BoardListItemNew };