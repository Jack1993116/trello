import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MDBContainer } from 'mdbreact';

import { SideNav, SideNavItem, SideNavLink, SideNavItemBtn } from '../utils/sidenav';
import ContentBoard from './dashboard.part/content.boards';
import BoardListItem from './dashboard.part/boardlist.item/boardlist.item';
import BoardListItemNew from './dashboard.part/boardlist.item/boardlist.item.new';
import CreateBoard from '../../component/createboard';
import CreateTeam from '../../component/createteam/createteam';

import { toRecently } from '../../redux/reducers/board/board.action';

const Dashboard = ({datas, stars, team, recentely, toRecently}) => {
	const [create, setCreate] = useState(false);
	const [createT, setCreateT] = useState(false);

	return (
		<div style={{backgroundColor: "#fafbfc"}} >
			<div >
				<div style={{minHeight: `calc(100vh - 40px)`}} >
					<div style={{display: "flex", alignItems: "flex-start", justifyContent: "center"}} >
						<SideNav sticky>
							<SideNavItem>
								<SideNavLink value="Boards" target="/main" />
								<SideNavLink value="Template" />
								<SideNavLink value="Home" />
								<SideNavItemBtn onClick={()=>{setCreateT(true)}} />
							</SideNavItem>
						</SideNav>
						<div className="mw-400" style={{flex: "1 1 100%"}} >
						{console.log(recentely)}
							{(recentely.length===0?false:true)&&
								<ContentBoard title="Recently Visited" >
									{recentely.map((item, id)=>{
										return <BoardListItem key={id} ids={id} title={datas[item].boardTitle} bk={datas[item].bk_url} />
									})}
								</ContentBoard>}
							{(stars.length===0?false:true)&&
								<ContentBoard title="Star" >
									{stars.map((item, id)=>{
										return <BoardListItem key={id} ids={id} title={datas[item].boardTitle} bk={datas[item].bk_url} />
									})}
								</ContentBoard>
							}
							{<ContentBoard title="Personal Boards" >
								{datas.map((item, id)=>{
									return <BoardListItem key={id} ids={id} title={item.boardTitle} bk={item.bk_url} onClick={()=>{
										toRecently(id);
									}} />
								})}
								<BoardListItemNew onClick={()=>{setCreate(true)}} />
							</ContentBoard>}
							{(team.length===0?false:true)&&
								<ContentBoard title="Team" />
							}
						</div>
					</div>
				</div>
			</div>
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
		team: state.board.team
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toRecently: (id) => dispatch(toRecently(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);