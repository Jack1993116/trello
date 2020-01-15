import React, { useState } from 'react';
import { connect } from 'react-redux';

import './note.css';
import { addListItem } from '../../redux/reducers/board/board.action';

import NoteList from './note.list';
import PrimaryBtn from '../utils/primary.button';

const Note = ({ ids, header, items, addItem, ...props }) => {
    const [f1, setF1] = useState(false);
    const [item, setItem] = useState("");

    return (
        <div className="list-wrapper">
			<div className="list">
				<div className="list-header">
					<textarea className="list-header-name mod-list-name js-list-name-input" aria-label="To Do" spellCheck="false" dir="auto" maxLength="512" style={{overflow: 'hidden', overflowWrap: 'break-word', height: '28px', width: '210px'}} defaultValue={header} />
					<div className="list-header-extra">
						<span className="fa fa-ellipsis-h icons" />
					</div>
				</div>
				<div className={`list-body`} >
					<div className="list-cards"> {
							items.map((item, id)=>{
								return <NoteList key={id} content={items[id]} />
					})}
					</div>
					<div className={` ${!f1?"blind":""}`}>
						<textarea style={{width: '255px'}} onChange={(e)=>{
							setItem(e.target.value);
						}} />
						<div>
							<div style={{float: 'left'}} >
								<PrimaryBtn style={{fontSize: "12pt"}} size="sm" value="Add Card" onClick={()=>{
									addItem({item: item, id: ids, title: header});
								}} >
									Add Card
								</PrimaryBtn>
								<span className="fa fa-times icons" onClick={()=>{setF1(false)}} />
							</div>
							<div style={{float: 'right'}} >
								<span className="icons fa fa-ellipsis-h" />
							</div>
						</div>
					</div>
				</div>
				<div className={`list-footer ${f1?"blind":""}`}>
					<span className="open-card-composer" onClick={()=>{setF1(true)}} >
						<span className="fa fa-plus icons" />
						<span>Add another card.</span>
					</span>
					<div style={{marginRight: "4px"}}>
						<span className="fa fa-ellipsis-h icons" />
					</div>
				</div>
			</div>
		</div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addListItem(data))
    }
}

export default connect(null, mapDispatchToProps)(Note);