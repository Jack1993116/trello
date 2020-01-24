import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import CustomInput from '../utils/input.custom';
import PrimaryBtn from '../utils/primary.button';

import {addList} from '../../redux/reducers/board/board.action';

import './note.css';

const AddNote = ({addList, ids}) => {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("");
	let classes = classNames({
		list: show,
		'list-wrapper': true,
		'hd-btn': !show
	})
	return (
		<div className={classes} style={{height: "fit-content"}} >
			{!show&&<div onClick={() => {setShow(!show)}}>
				<span className="fa fa-plus icons" />
				<span>Add another list</span>
			</div>}
			{show&&
				<div >
					<CustomInput type="text" hint="Enter list title..." style={{padding: "3px", margin: "3px"}} onChange={(e) => {setTitle(e.target.value)}} />
					<PrimaryBtn size="sm" style={{fontSize: "12pt", margin: "auto auto 5px 7px"}} onClick={() => {addList({id: ids, title: title})}}>Add List</PrimaryBtn>
					<span className="fa fa-times icons" onClick={() => {setShow(false)}} />
				</div>
			}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		addList: (data) => dispatch(addList(data))
	}
}

export default connect(null, mapDispatchToProps)(AddNote);