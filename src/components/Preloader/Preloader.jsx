import React from 'react';
import './Preloader.scss';
import weatherLoader from '../../assets/images/weatherLoader.gif'

const Preloader = (props) => {
	return (
		<div className='Preloader'>
			<img src={weatherLoader} alt="Weather loading..." />
		</div>
	)
}

export default Preloader;
