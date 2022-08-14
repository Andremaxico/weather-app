import React, { useEffect } from 'react';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getCurrentDayForecast, getFewDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Day from './Day';
import './DaysForecast.scss';

const Days = ({fewDaysForecast, setDayForecast, currentDayForecast, currentWeather}) => {
	const showedDays = fewDaysForecast.filter(({date}) => {
		console.log(date);
		return true
	});
	return (
		<div className='DaysForecast'>
			<CurrentWeather weather={currentWeather} />
			{ showedDays.length > 0 &&
			  showedDays.map((dayForecast) => {
				return <Day 
					forecast={dayForecast} setDayForecast={setDayForecast}
					key={dayForecast.date} currentDayForecast={currentDayForecast}
				/>
			})}
		</div>
	)
}

export default Days;