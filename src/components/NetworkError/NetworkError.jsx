import React from 'react';
import './NetworkError.scss';

const NetworkError = ({ message, ...rest }) => {
	console.log('network error data: ', message, rest);
	return (
		<div className='NetworkError'>
			<div className="NetworkError__message">
				<p>{message || 'Some error occured'}</p>
				<p>Plase try again</p>
			</div>
			<button className='NetworkError__reload-btn' onClick={() => document.location.reload()}>Reload page</button>
		</div>
	)
}

export default NetworkError;
