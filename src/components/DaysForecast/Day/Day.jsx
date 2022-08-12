import React from 'react'
import { getHour } from '../../../helpers/dateParse';

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
			<p className="Day__time"></p>
		</div>
	)
}

export default Day;
