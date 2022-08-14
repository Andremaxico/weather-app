import React from 'react'
import { getCurrentDate, getCurrentHour, getHour } from '../../../helpers/dateParse';
import windDirection from '../../../assets/images/wind-direction.png';
import { kphToMps } from '../../../helpers/converters';

const Day = ({forecast, currentDayForecast, setDayForecast}) => {
	const avgForecast = forecast.day;
	const wind_mps = kphToMps(avgForecast.avgvis_km);
	const currHour = getCurrentHour();
	const realFeels = forecast.hour[currHour-1].feelslike_c;

	const isToday = forecast.date === getCurrentDate();
	const isCurrentDay = forecast.date === currentDayForecast.date;
	/*for(let i = 0; i < forecast.length; i++) {
		const currForecast = forecast[i];
		const currHour = getHour(currForecast.dt_txt);
		hoursForecasts[currHour] = currForecast;
	}
	const nowForecast = hoursForecasts[getHour(new Date().toLocaleDateString())];
	const [weather] = nowForecast.weather || [];*/
	const dateString = new Date(forecast.date).toLocaleDateString({}, {weekday: 'long', day: '2-digit', month: 'long'});
	return (
		<button className={`Day ${isCurrentDay && 'current'}`} onClick={() => setDayForecast(forecast.date)}>
			<p className={`Day__title Day__date ${isToday && '_today'}`}>
				{dateString[0].toUpperCase() + dateString.slice(1)}
			</p>

			<div className="Day__sky-icon" title={avgForecast.condition.text}>
				<img src={`http:${avgForecast.condition.icon}`} alt="condition icon" />
			</div>

			<div className="Day__temperature-info">
			 	<span className='value'>{avgForecast.avgtemp_c}°C</span>
			</div>

			<div className="Day__wind-info">
				<div className="direction-icon">
					<img src={windDirection} style={{transform: 'rotate( ' + avgForecast.maxwindkph +'deg)'}} alt="wind arrow" />
				</div>
				<p className="speed">{wind_mps} m/s</p>
			</div>
		</button>
	)
}

export default Day;
