import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { createNewBoard } from '../../redux/reducers/board/board.action';

import PrimaryBtn from '../utils/primary.button';
import '../../pages/main/dashboard.part/boardlist.item/boardlist.item.css';
import './createboard.css';

const CreateBoard = ({ids, createBoard, show, onHide}) => {
	const [check, setCheck] = useState(true);
	const [title, setTitle] = useState("Private");
	const [board, setBoard] = useState("");
	const [active, setActive] = useState(true);
	const isActive = (board) => {
		setBoard(board);
		board.length?setActive(false):setActive(true);
	}
	return (
		<Modal id="createboard" show={show} onHide={onHide} >
			<Modal.Body >
				<div className="createboard-tile" style={{backgroundImage: `url("https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9")`}}>
					<button id="close" onClick={onHide} ><span className="fa fa-times" /></button>
					<div>
						<input type="text" placeholder="Add board title" data-test-id="create-board-title-input" className="subtle-input" onChange={(e)=>{isActive(e.target.value)}} />
					</div>
					<div>
						<DropdownButton size="sm" title={title} >
							<Dropdown.Item onClick={()=>{setTitle("Private"); setCheck(true)}} >
								<span className="fa fa-lock icon-private"></span>
								<span>Private</span>
								{check&&<span className="fa fa-check"></span>}
								<span class="sub-name">
									<span>Only board members can see and edit this board.</span>
								</span>
							</Dropdown.Item>
							<Dropdown.Item onClick={()=>{setTitle("Public"); setCheck(false)}} >
								<span class="fa fa-globe-asia icon-public"></span>
								<span>Public</span>
								{!check&&<span class="fa fa-check"></span>}
								<span class="sub-name">
									<span>Anyone on the internet (including Google) can see this board. Only board members can edit.</span>
								</span>
							</Dropdown.Item>
						</DropdownButton>
					</div>
				</div>
				<ul className="background-grid">
					<li className="background-grid-item">
						<button className="background-grid-trigger is-photo selected" type="button" style={{backgroundImage: `url(https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot;)`}}>
							<span className="fa fa-check" style={{color: "white"}} />
						</button>
					</li>
				</ul>
			</Modal.Body>
			<Modal.Footer>
				<Link to={`/${board}/detail/${ids}`}>
					<PrimaryBtn size="sm" 
						style={{fontSize: "12pt"}} 
						disabled={active} 
						onClick={
							() => {
								createBoard({
									boardTitle:board,
									boardType: title,
									colloborators: [],
									lists: {  },
									bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg"
							})}
						} 
					>
						Create Board
					</PrimaryBtn>
				</Link>
				<a className="start-with-a-template" href="/template" >
					<span className="fa fa-user" style={{padding: "5px"}} />
					<span>Start with a template</span>
				</a>
			</Modal.Footer>
		</Modal>
	)
}

const mapStateToProps = (state) => {
	return {
		ids: state.board.base.length
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createBoard: (data) => dispatch(createNewBoard(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);