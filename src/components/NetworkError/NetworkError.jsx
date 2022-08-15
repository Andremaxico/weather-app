import React from 'react';
import './NetworkError.scss';

const NetworkError = ({ message, ...rest }) => {
	console.log(message, rest)
	return (
		<div className='NetworkError'>
			<param className="NetworkError__message">
				<p>{message || 'Some error occured'}</p>
				<p>Plase try again</p>
			</param>
			<button onClick={() => document.location.reload()}>Reload page</button>
		</div>
	)
}

export default NetworkError;
