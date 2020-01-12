import React from 'react';

const PrimaryBtn = ({children, size, value, width, disabled, ...props}) => {
	return (
		<button type="button" className={"success-color btnP1 btn-"+size} style={{outline: "none", width: "280px", border: "none", color: "white", fontSize: "1.5625rem", width: width}} {...props} value={value} disabled={disabled} >
			{children}
		</button>
	)
}

export default PrimaryBtn;