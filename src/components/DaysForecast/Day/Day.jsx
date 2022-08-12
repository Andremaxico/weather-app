import React from 'react'
import { getHour } from '../../../helpers/dateParse';
import windDirection from '../../../assets/images/wind-direction.png';

const Day = ({forecast}) => {
	let hoursForecasts = {};
	for(let i = 0; i < forecast.length; i++) {
		const currForecast = forecast[i];
		const currHour = getHour(currForecast.dt_txt);
		hoursForecasts[currHour] = currForecast;
	}
	const nowForecast = hoursForecasts[getHour(new Date().toLocaleDateString())];
	const [weather] = nowForecast.weather || [];
	return (
		<div className='Day active'>
			<div className="Day__weather-icon" title={weather?.description}>
				icon
			</div>
			<div className="Day__temperature">{Math.round(nowForecast.main?.temp)}°C</div>
			<p className="Day__time">Now</p>
			<div className="Day__wind">
				<div className="Day__wind-icon">
					<img src={windDirection} style={{transform: 'rotate( ' + nowForecast.wind.deg +'deg)'}} alt="wind arrow" />
				</div>
				<p className="Day__wind-speed">{nowForecast.wind.speed} m/s</p>
			</div>
		</div>
	)
}

export default Day;
