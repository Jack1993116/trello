import React, {useState} from 'react';

const CustomTextarea = ({type, hint, value, children, rowCount=7, ...props}) => {
	const [focus1, setFocus] = useState("");
	return (
		<div className={"form" + focus1} onFocus={(e)=>{setFocus(" form-focus")}} onBlur={(e)=>{setFocus("")}} style={{height: ""}} >
			<textarea className="form-input" defaultValue={value} type={type} placeholder={hint} {...props} rows={rowCount}/>
				{children}
		</div>
	)
}

export default CustomTextarea;