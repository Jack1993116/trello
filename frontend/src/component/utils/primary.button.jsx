import React from 'react';

const PrimaryBtn = ({children, size, ...props}) => {
	return (
		<button type="button" className={"success-color btnP1 btn-"+size} style={{outline: "none", width: "280px", border: "none", color: "white", fontSize: "1.5625rem"}} {...props} >
			{children}
		</button>
	)
}

export default PrimaryBtn;