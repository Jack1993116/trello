import React from 'react';

import CustomInput from '../../component/utils/input.custom';
import PrimaryBtn from '../../component/utils/primary.button';
import CustomTextarea from '../../component/utils/textarea.custom';

import './team.css';

const ProfileForm = ({close}) => {
	return (
		<form style={{width: "250px"}} >
			<p>Name</p>
			<CustomInput classE="custominput-sm" />
			<p>Short Name</p>
			<CustomInput classE="custominput-sm" />
			<p>Website (optional)</p>
			<CustomInput classE="custominput-sm" />
			<p>Description</p>
			<CustomTextarea rowCount={2} />
			<div>
				<PrimaryBtn size="sm" fontS="16px">Save</PrimaryBtn>
				<a className="button-link" style={{display: "inline", marginLeft: "5px"}} onClick={() => {close(false)}} >Cancel</a>
			</div>
		</form>
	)
}

export default ProfileForm;