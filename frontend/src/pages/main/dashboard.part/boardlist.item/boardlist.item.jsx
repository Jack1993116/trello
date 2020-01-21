import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './boardlist.item.css';

import { toRecently, toStarred } from '../../../../redux/reducers/board/board.action';

const BoardListItem = ({ title, bk, ids, toRecently, toStarred, star, ...props }) => {
	const [show, setShow] = useState(false);
    return (
        <Link to={`/${title}/detail/${ids}`} className="board-list-item" >
			<li >
				<div 
					className="board-tile" 
					style={{backgroundImage: `url(${bk})`}}
				>
					<span className="board-tile-fade" />
					<div 
						className="board-tile-detail" 
						onClick={() => {
								if(!show) toRecently(ids);
							}
						}
					>
						<div className="board-tile-detail-name">{title}</div>
						<div className="board-tile-details-sub-container">
							<span className="board-tile-options">
								<span 
									title="Click to star this board. It will show up at the top of your boards list." 
									className={`far fa-star board-tile-options-star-icon ${star?"w-18":show?"w-18":""}` } 
									style={{zIndex: 4}}
									onClick={(e)=>{
										e.preventDefault();
										setShow(!show);
										toStarred(ids);
									}} />
							</span>
						</div>
					</div>
				</div>
			</li>
		</Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toRecently: (id) => dispatch(toRecently(id)),
        toStarred: (id) => dispatch(toStarred(id))
    }
}

export default connect(null, mapDispatchToProps)(BoardListItem);