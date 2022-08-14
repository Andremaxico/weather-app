import React from 'react'
import { kphToMps } from '../../../helpers/converters';
import { getCurrentDate, getCurrentHour, getHour } from '../../../helpers/dateParse';
import windDirection from '../../../assets/images/wind-direction.png';
const HourForecast = ({hourForecast, closestHour}) => {
	const wind_mps = kphToMps(hourForecast.wind_kph);
	const isNow = getHour(hourForecast.time).slice(0, 2) == closestHour;
	const isToday = hourForecast.time.slice(0, 10) === getCurrentDate() ;
	return (
		<div className="HourForecast" key={hourForecast.time} 
			style={isNow && isToday ? {borderColor: '$red'} : {}}
		>
			<h3 
				className={` HourForecast__time ${isNow && isToday && '_currentHour'} `} 
			>{ getHour(hourForecast.time) }</h3>
			<div className="HourForecast__weather-icon" title={hourForecast.condition.text}>
				<img src={`http:${hourForecast.condition.icon}`} alt="condition icon" />
			</div>
			<div className="HourForecast__temperature">
				{hourForecast.temp_c}°C
				</div>
			<div className="HourForecast__wind">
				<div className="HourForecast__wind-icon">
					<img src={windDirection} style={{transform: 'rotate( ' + hourForecast.wind_degree +'deg)'}} alt="wind arrow" />
				</div>
				<p className="HourForecast__wind-speed">{wind_mps} m/s</p>
			</div>
		</div>
	)
}

export default HourForecast;