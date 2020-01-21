import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import classNames from 'classnames';

import { getDataById } from '../../api/utils/getDataById';

import './note.css';

const NoteList = ({content, datas, ids, groupId, header, callback1}) => {
	const ref = useRef(null);
	const [{isDragging}, drag] = useDrag({
		item: {id: ids, list: content, type: 'a'},
		begin: (monitor) => {
			getDataById(datas, groupId).lists[header].splice(ids, 1);
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const [, drop] = useDrop({
		accept: "a",
		hover: (item, monitor) => {
			let dragIndex = item.id;
			let hoverIndex = ids;
			if(!ref.current) {
				return;
			}
			const hoverBoundingRect = ref.current.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		    const clientOffset = monitor.getClientOffset();
		    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
		    	return;
		    }

		    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			item.index = hoverIndex;
		}
	});
	// drag(drop(ref));
	const [visible, setVisible] = useState(false);
	const spanClass = classNames("list-card");
	return (
		<span ref={drag} className={spanClass} onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} >
			<span className={`fas fa-pen icons-ss list-card-operation ${visible?'visible':''}`} style={{color: "gray"}} />
			<span>{content}</span>
		</span>
	)
}

const mapStateToProps = (state) => {
	return {
		datas: state.board.base,
	}
}

export default connect(mapStateToProps)(NoteList);