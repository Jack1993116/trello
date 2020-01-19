import React from 'react';
import classNames from 'classnames';

import './createboard.css';

const BkList = ({ids, select, setSelect, onClick}) => {
	const bk_select_class = classNames(
		"fa", 
		{"fa-check": select&ids}
	);
	return (
		<li className="background-grid-item" onClick={()=>{setSelect(ids)}} >
			<button className="background-grid-trigger is-photo selected" type="button" style={{backgroundImage: `url(https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot)`}}>
				<span className={bk_select_class} style={{color: "white"}} />
			</button>
		</li>
	)
}

export default BkList;