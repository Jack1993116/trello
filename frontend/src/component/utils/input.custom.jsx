import React, {useState} from 'react';

const CustomInput = ({type, hint, value, children, ...props}) => {
	const [focus1, setFocus] = useState("");
	return (
		<div className={"form" + focus1} onFocus={(e)=>{setFocus(" form-focus")}} onBlur={(e)=>{setFocus("")}}>
			<input className="form-input" type={type} placeholder={hint} {...props}/>
				{children}
		</div>
	)
}

export default CustomInput;