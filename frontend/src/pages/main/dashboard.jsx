import React, { useState } from 'react';
import { MDBContainer } from 'mdbreact';

import { SideNav, SideNavItem, SideNavLink, SideNavItemBtn } from '../utils/sidenav';
import ContentBoard from './dashboard.part/content.boards';
import { BoardListItemNew, BoardListItem } from './dashboard.part/boardlist.item/boardlist.item';
import CreateBoard from '../../component/createboard';
import CreateTeam from '../../component/createteam/createteam';

const Dashboard = () => {
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
						<ContentBoard >
							<BoardListItem title="Team" />
							<BoardListItemNew onClick={()=>{setCreate(true)}} />
						</ContentBoard>
					</div>
				</div>
			</div>
			<CreateTeam show={createT} onHide={()=>{setCreateT(false)}} />
			<CreateBoard show={create} onHide={()=>{setCreate(false)}} />
		</div>
	)
}

export default Dashboard;