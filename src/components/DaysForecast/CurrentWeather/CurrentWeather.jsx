import React from 'react';
import windDirection from '../../../assets/images/wind-direction.png';
import { kphToMps } from '../../../helpers/converters';

const CurrentWeather = ({ weather }) => {
	const wind_mps = kphToMps(weather.wind_kph);
	return (
		<div className='CurrentWeather'>
			<h3 className="CurrentWeather__title">Now</h3>
			<div className="CurrentWeather__sky-icon">
				<img 
					src={`http:${weather.condition.icon}`} alt={'icon ' + weather.condition.text}
				/>
			</div>
			<div className="CurrentWeather__temperature-info">
				<p className="value">{weather.temp_c}°C</p>
				<p className="real-feels">Real feels {weather.feelslike_c}°C</p>
			</div>
			<div className="CurrentWeather__wind-info">
				<div className="direction-icon">
					<img 
						src={windDirection}
						style={{transform: `rotate(${weather.wind_degree}deg)`}}  
					/>
				</div>
				<p className="speed">{wind_mps} m/s</p>
			</div>
		</div>
	)
}

export default CurrentWeather;
