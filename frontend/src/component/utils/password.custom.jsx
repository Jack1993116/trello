import React, {useState} from 'react';
import CustomInput from './input.custom';

const CustomPassword = () => {
	const [type, setType] = useState(false);
	const [password, setPassword] = useState("");
	const isLong = (value) => {
		setPassword(value);
		const l1 = /\w/;
		const l2 = /\d/;
		const l3 = /\W/;
	}
	return (
		<div>
			<CustomInput type={!type?"password":"text"} hint="Create Password" onChange={(e)=>{
				isLong(e.target.value)
			}}>
				<span className="far fa-eye" style={{fontSize: "14pt"}} onClick={()=>{
					setType(!type);
				}}/>
			</CustomInput>
			<div className="password_strength_container">
				<span className="password_strength" />
			</div>
		</div>
	)
}

export default CustomPassword;