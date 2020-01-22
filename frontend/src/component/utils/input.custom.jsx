import React, {useState} from 'react';

const CustomInput = ({classE, type, hint, value, children, ...props}) => {
	const [focus1, setFocus] = useState("");
	return (
		<div className={"form " + classE + focus1} onFocus={(e)=>{setFocus(" form-focus")}} onBlur={(e)=>{setFocus("")}} style={props.style} >
			<input className="form-input" type={type} placeholder={hint} {...props}/>
				{children}
		</div>
	)
}

export default CustomInput;