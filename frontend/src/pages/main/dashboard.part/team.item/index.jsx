import React from 'react';

import BoardListItemNew from '../boardlist.item/boardlist.item.new';
import ContentBoard from '../content.boards';

const TeamList = () => {
	return (
		<ContentBoard icon="users" team>
			<BoardListItemNew />
		</ContentBoard>
	)
}

export default TeamList;