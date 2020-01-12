import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import PrimaryBtn from '../utils/primary.button';
import '../../pages/main/dashboard.part/boardlist.item/boardlist.item.css';
import './createboard.css';

const CreateBoard = ({show, onHide}) => {
	const [check, setCheck] = useState(true);
	const [title, setTitle] = useState("Private");
	return (
		<Modal id="createboard" show={show} onHide={onHide} >
			<Modal.Body >
				<div className="createboard-tile" style={{backgroundImage: `url("https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9")`}}>
					<button id="close" onClick={onHide} ><span className="fa fa-times" /></button>
					<div>
						<input type="text" placeholder="Add board title" data-test-id="create-board-title-input" className="subtle-input" />
					</div>
					<div>
						<DropdownButton size="sm" title={title} >
							<Dropdown.Item onClick={()=>{setTitle("Private"); setCheck(true)}} >
								<span class="fa fa-lock icon-private"></span>
								<span>Private</span>
								{check&&<span class="fa fa-check"></span>}
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
		</Modal>
	)
}

export default CreateBoard;