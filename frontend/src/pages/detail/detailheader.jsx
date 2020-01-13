import React from 'react';

import './detail.css';

const DetailHeader = ({title}) => {
	return (
		<div className="board-header" >
			<div className="board-header-btn mod-board-name" >
				<span style={{fontSize: "14pt"}} >{title}</span>
			</div>
			<a id="star" className="board-header-btn" href="#" title="Click to star or unstar this board. Starred boards show up at the top of your boards list." aria-label="Star or Unstar Board">
				<span className="fa fa-star board-header-btn-icon" style={{left: "0"}} />
			</a>
			<div className="board-header-btn-org-wrapper" >
				<a className="board-header-btn" style={{paddingLeft: 0}} >
					<span className="board-header-btn-divider" />
					<span className="board-header-btn-text" style={{paddingRight: 0}} >Personal</span>
				</a>
				<span className="board-header-btn-divider" />
				<a id="permission-level" className="board-header-btn perms-btn js-change-vis" href="#" title="Only board members can see and edit this board.">
					<span className="board-header-btn-icon fa fa-lock" />
					<span className="board-header-btn-text">Private</span>
				</a>
				<span className="board-header-btn-divider" />
			</div>
			<div className="board-header-btns" >
				<a id="invite" className="board-header-btn board-header-btn-invite board-header-btn-without-icon padding-left-24" href="#" title="Invite To Board">
					<span className="board-header-btn-text">Invite</span>
				</a>
			</div>
			<div className="mod-right">
				<span className="board-header-btn op">
					<span className="fa fa-user board-header-btn-icon" />
					<span className="board-header-btn-text">Butler</span>
				</span>
				<a className="board-header-btn mod-show-menu op" href="#">
					<span className="fa fa-user board-header-btn-icon" />
					<span className="board-header-btn-text">Show Menu</span>
				</a>
			</div>
		</div>
	)
}

export default DetailHeader;