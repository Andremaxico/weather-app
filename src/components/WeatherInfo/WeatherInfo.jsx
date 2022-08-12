import React, { useEffect, useState, useReducer } from 'react';
import { weatherAPI } from '../../api';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getFiveDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';

const WeatherInfo = (props) => {
	const [fiveDaysForecast, setFiveDaysForecast] = useState({});
	const [cityInfo, setCityInfo] = useState({});
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	useEffect(() => {
		dispatch(getFiveDaysForecast('Klishkivtsi'));
		setFiveDaysForecast(state);
		
	}, [])

	const windDirect = ['South', 'West', 'North', 'East'];
	//const currWindDirectory = windDirect[weatherData.wind.deg / 90];\
	window.forecast = state.fiveDaysForecast;
	return (
		<div>
			{/*<p>City: {weatherData.name}</p>
			<p>Temperature: {Math.round(weatherData.main.temp)}</p>
			<p>Feels like: {Math.round(weatherData.main.feels_like)}</p>
			<p>Wind: {Math.round(weatherData.wind.speed, 1)}, {currWindDirectory}</p>
			<p>Humudity: {weatherData.main.humidity}%</p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
	      <p></p>*/}
		</div>
	)
}

export default WeatherInfo;
