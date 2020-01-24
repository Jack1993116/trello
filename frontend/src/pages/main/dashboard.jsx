import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MDBContainer } from 'mdbreact';

import { loadData } from '../../redux/reducers/board/board.action';
import { setCreate, setCreateT } from '../../redux/reducers/util/util.action';
import { getDataById } from '../../api/utils/getDataById';

import { SideNav, SideNavItem, SideNavLink, SideNavItemBtn } from '../utils/sidenav';
import BoardListItem from './dashboard.part/boardlist.item/boardlist.item';
import BoardListItemNew from './dashboard.part/boardlist.item/boardlist.item.new';
import ContentBoard from './dashboard.part/content.boards';
import TeamList from './dashboard.part/team.item';

const Dashboard = ({ setCreate, setCreateT, load, datas, stars, team, recentely, toRecently }) => {
	useEffect(() => {})
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
						<div className="mw-400 all-boards" >
							{(recentely.length===0?false:true)&&
								<ContentBoard title="Recently Visited" icon="clock" >
									{recentely.map((item, id)=>{
										const data = getDataById(datas, item);
										return <BoardListItem key={id} ids={item} title={data.boardTitle} bk={data.bk_url} />
									})}
								</ContentBoard>}
							{(stars.length===0?false:true)&&
								<ContentBoard title="Star" star={true} icon="star" >
									{stars.map((item, id)=>{
										const data = getDataById(datas, item);
										return <BoardListItem key={id} ids={item} title={data.boardTitle} bk={data.bk_url} star={true} />
									})}
								</ContentBoard>
							}
							{<ContentBoard title="Personal Boards" >
								{datas.map((item, id)=>{
									return <BoardListItem key={id} ids={item.id} title={item.boardTitle} bk={item.bk_url} />
								})}
								<BoardListItemNew onClick={()=>{setCreate(true)}} />
							</ContentBoard>}
							<TeamList />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
		load: () => dispatch(loadData()),
		setCreate: (data) => dispatch(setCreate(data)),
		setCreateT: (data) => dispatch(setCreateT(data))
	}
}

export default connect(null, mapDispatchToProps)(Dashboard);