import React from 'react';
import { connect } from 'react-redux';

import Header0 from '../header0';
import Dashboard from './dashboard';
import CreateBoard from '../../component/createboard';
import CreateTeam from '../../component/createteam/createteam';

import { setCreate, setCreateT } from '../../redux/reducers/util/util.action';

const Main = ({create, createT, setCreateT, setCreate, datas, stars, recentely, team}) => {
	React.useEffect(() => {})
	return (
		<div>
			<Header0 />
			<Dashboard datas={datas} stars={stars} recentely={recentely} team={team} />
			<CreateTeam show={createT} onHide={()=>{setCreateT(false)}} />
			<CreateBoard show={create} onHide={()=>{setCreate(false)}} />
		</div>
	)
}

const mapStateToProps = (state) => {
    return {
        datas: state.board.base,
        stars: state.board.starred,
        recentely: state.board.recently,
        team: state.board.team,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);