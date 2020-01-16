import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header0 from '../header0';
import DetailBoard from './detailboard';

import { getDataById } from '../../api/utils/getDataById';

const Detail = ({datas, ...props}) => {
	const id = props.match.params.ids;
	const data = getDataById(datas, id);
	
	return (
		<div style={{backgroundImage: `url(${data.bk_url})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
			<Header0 fixed="top" transparent />
			<DetailBoard accessable={data.boardType} lists={data.lists} ids={id} title_1={data.boardTitle} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		datas: state.board.base
	}
}

export default connect(mapStateToProps)(Detail);