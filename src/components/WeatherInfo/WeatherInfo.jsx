import React, { useEffect, useState, useReducer } from 'react';
import { weatherAPI } from '../../api';
import { kphToMps } from '../../helpers/converters';
import { getHour } from '../../helpers/dateParse';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getfewHourForecastsForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import windDirection from '../../assets/images/wind-direction.png';

const WeatherInfo = ({forecast}) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);
	console.log(forecast);
	return (
		<div className='WeatherInfo'>
			{forecast.map(hourForecast => {
				const wind_mps = kphToMps(hourForecast.wind_kph);
				return <div className="HourForecast">
					<div className="HourForecast__weather-icon" title={hourForecast.condition.text}>
						<img src={`http:${hourForecast.condition.icon}`} alt="condition icon" />
					</div>
					<div className="HourForecast__temperature">
						{hourForecast.temp_c}°C(<i>Feels: {hourForecast.feelslike_c}</i>)
						</div>
					<p className="HourForecast__time">{ getHour(hourForecast.time) }</p>
					<div className="HourForecast__wind">
						<div className="HourForecast__wind-icon">
							<img src={windDirection} style={{transform: 'rotate( ' + hourForecast.wind_degree +'deg)'}} alt="wind arrow" />
						</div>
						<p className="HourForecast__wind-speed">{wind_mps} m/s</p>
					</div>
				</div>
			})}
		</div>
	)
}

export default WeatherInfo;
