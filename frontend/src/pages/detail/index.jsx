import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header0 from '../header0';
import DetailBoard from './detailboard';

const Detail = ({datas, ...props}) => {
	const id = props.match.params.ids;
	return (
		<div style={{backgroundImage: `url(${datas[id].bk_url})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
			<Header0 fixed="top" transparent />
			<DetailBoard accessable={datas[id].boardType} lists={datas[id].lists} ids={id} title_1={datas[id].boardTitle} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		datas: state.board.base
	}
}

export default connect(mapStateToProps)(Detail);