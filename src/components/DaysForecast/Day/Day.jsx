import React from 'react'
import { getHour } from '../../../helpers/dateParse';
import windDirection from '../../../assets/images/wind-direction.png';
import { kphToMps } from '../../../helpers/converters';

const Day = ({forecast, currentDayForecast, setDayForecast}) => {
	console.log(currentDayForecast);
	const avgForecast = forecast.day;
	const wind_mps = kphToMps(avgForecast.avgvis_km);
	const isToday = forecast.date === new Date().toLocaleDateString().split('.').reverse().join('-');
	const isCurrentDay = forecast.date === currentDayForecast.date;
	const currentDate = new Date(forecast.date);
	console.log(currentDate.getDay());
	/*for(let i = 0; i < forecast.length; i++) {
		const currForecast = forecast[i];
		const currHour = getHour(currForecast.dt_txt);
		hoursForecasts[currHour] = currForecast;
	}
	const nowForecast = hoursForecasts[getHour(new Date().toLocaleDateString())];
	const [weather] = nowForecast.weather || [];*/
	return (
		<button className={`Day ${isCurrentDay && 'current'}`} onClick={() => setDayForecast(forecast.date)}>
			<p className="Day__date"></p>
			<div className="Day__weather-icon" title={avgForecast.condition.text}>
				<img src={`http:${avgForecast.condition.icon}`} alt="condition icon" />
			</div>
			<div className="Day__temperature">{avgForecast.avgtemp_c}°C</div>
			{isCurrentDay && isToday && <p className="Day__time">Now</p>}
			<div className="Day__wind">
				<div className="Day__wind-icon">
					<img src={windDirection} style={{transform: 'rotate( ' + avgForecast.maxwindkph +'deg)'}} alt="wind arrow" />
				</div>
				<p className="Day__wind-speed">{wind_mps} m/s</p>
			</div>
		</button>
	)
}

export default Day;
