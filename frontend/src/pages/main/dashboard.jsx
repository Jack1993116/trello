import React from 'react';
import { MDBContainer } from 'mdbreact';

import { SideNav, SideNavItem } from '../utils/sidenav';
import ContentBoard from './dashboard.part/content.boards';
import { BoardListItemNew, BoardListItem } from './dashboard.part/boardlist.item/boardlist.item';

const Dashboard = () => {
	return (
		<div style={{backgroundColor: "#fafbfc"}} >
			<MDBContainer >
				<div style={{minHeight: `calc(100vh - 40px)`}} >
					<div style={{display: "flex", alignItems: "flex-start", justifyContent: "center"}} >
						<SideNav sticky>
							<SideNavItem>
								<a>AAA</a>
							</SideNavItem>
						</SideNav>
						<ContentBoard >
							<BoardListItemNew />
						</ContentBoard>
					</div>
				</div>
			</MDBContainer>
		</div>
	)
}

export default Dashboard;