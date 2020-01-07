import React from 'react';

const LoggerBtn = ({title, ...props}) => {
	return (
		<input className="btn-login" type="button" value={title} {...props}/>
	)
}

export default LoggerBtn;