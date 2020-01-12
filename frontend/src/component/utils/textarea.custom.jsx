import React, {useState} from 'react';

const CustomTextarea = ({type, hint, value, children, ...props}) => {
	const [focus1, setFocus] = useState("");
	return (
		<div className={"form" + focus1} onFocus={(e)=>{setFocus(" form-focus")}} onBlur={(e)=>{setFocus("")}} style={{height: ""}} >
			<textarea className="form-input" type={type} placeholder={hint} {...props} rows="7"/>
				{children}
		</div>
	)
}

export default CustomTextarea;