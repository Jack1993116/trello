import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import Header0 from '../header0';
import DetailBoard from './detailboard';
import CreateBoard from '../../component/createboard';
import CreateTeam from '../../component/createteam/createteam';

import { getDataById } from '../../api/utils/getDataById';
import { setCreate, setCreateT } from '../../redux/reducers/util/util.action';

const Detail = ({datas, create, createT, setCreateT, setCreate, ...props}) => {
	const id = props.match.params.ids;

	const data = useMemo(() => getDataById(datas, id));
	
	return (
		<div style={{backgroundImage: `url(${data.bk_url})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "50%"}} >
			<Header0 fixed="top" transparent />
			<DetailBoard accessable={data.boardType} lists={data.lists} ids={id} title_1={data.boardTitle} />
			<CreateTeam show={createT} onHide={()=>{setCreateT(false)}} />
			<CreateBoard show={create} onHide={()=>{setCreate(false)}} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		datas: state.board.base,
        create: state.util.create,
        createT: state.util.createT
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCreate: (data) => dispatch(setCreate(data)),
		setCreateT: (data) => dispatch(setCreateT(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);