import React, { useState } from 'react';

import './note.css';

const NoteList = ({content}) => {
	const [visible, setVisible] = useState(false);
	return (
		<a className={`list-card `}  onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} >
			<span className={`fas fa-pen icons-ss list-card-operation ${visible?'visible':''}`} style={{color: "gray"}} />
			<span>{content}</span>
		</a>
	)
}

export default NoteList;