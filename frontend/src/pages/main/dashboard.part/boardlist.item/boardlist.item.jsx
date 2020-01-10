import React from 'react';
import './boardlist.item.css';

const BoardListItem = () => {
	return (
		<li className="board-list-item" >
			<a className="board-tile" style={{backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg")`}} >
				<span className="board-tile-fade" />
				<div className="board-tile-detail">
					<div className="board-tile-detail-name">Team</div>
					<div className="board-tile-details-sub-container">
						<span className="board-tile-options">
							<span title="Click to star this board. It will show up at the top of your boards list." className="far fa-star board-tile-options-star-icon"></span>
						</span>
					</div>
				</div>
			</a>
		</li>
	)
}

const BoardListItemNew = ({onClick}) => {
	return (
		<li style={{display: "list-item"}} className="board-list-item" onClick={onClick} >
			<div className="board-tile mod-add">
				<p style={{ fontSize: "14px" ,margin: "0px"}} ><span>Create new board</span></p>
			</div>
		</li>
	)
}

export { BoardListItem, BoardListItemNew };