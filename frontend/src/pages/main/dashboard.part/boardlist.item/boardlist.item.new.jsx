import React from 'react';
import {connect} from 'react-redux';
import './boardlist.item.css';

const BoardListItemNew = ({onClick}) => {
	return (
		<li style={{display: "list-item"}} className="board-list-item" onClick={onClick} >
			<div className="board-tile mod-add">
				<p style={{ fontSize: "14px" ,margin: "0px"}} ><span>Create new board</span></p>
			</div>
		</li>
	)
}

export default BoardListItemNew;