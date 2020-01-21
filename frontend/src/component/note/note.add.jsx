import React, { useState } from 'react';
import classNames from 'classnames';

import CustomInput from '../utils/input.custom';
import PrimaryBtn from '../utils/primary.button';

import './note.css';

const AddNote = () => {
	const [show, setShow] = useState(false);
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
			{show&&<div >
				<CustomInput type="text" hint="Enter list title..." style={{padding: "3px", margin: "3px"}} />
				<PrimaryBtn size="sm" style={{fontSize: "12pt", margin: "auto auto 5px 7px"}} >Add List</PrimaryBtn>
				<span className="fa fa-times icons" onClick={() => {setShow(false)}} />
			</div>}
		</div>
	)
}

export default AddNote;