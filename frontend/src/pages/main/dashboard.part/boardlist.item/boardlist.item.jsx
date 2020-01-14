import React from 'react';
import {connect} from 'react-redux';
import './boardlist.item.css';

const BoardListItem = ({title, bk, ids, ...props}) => {
	return (
		<li className="board-list-item" {...props} >
			<a className="board-tile" href={`/${title}/detail/${ids}`} style={{backgroundImage: `url(${bk})`}} >
				<span className="board-tile-fade" />
				<div className="board-tile-detail">
					<div className="board-tile-detail-name">{title}</div>
					<div className="board-tile-details-sub-container">
						<span className="board-tile-options">
							<span title="Click to star this board. It will show up at the top of your boards list." className="far fa-star board-tile-options-star-icon" />
						</span>
					</div>
				</div>
			</a>
		</li>
	)
}
// href={`/${title}/detail/${ids}`}

export default (BoardListItem);
