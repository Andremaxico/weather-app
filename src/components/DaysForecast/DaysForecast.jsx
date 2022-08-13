import React, { useEffect } from 'react';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getCurrentDayForecast, getFewDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import Day from './Day';
import './DaysForecast.scss';

const Days = ({cityName}) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	window.state = state;

	useEffect(() => {
		dispatch( getFewDaysForecast(cityName) );
	}, [cityName]);

	const setDayForecast = (date) => dispatch(getCurrentDayForecast(date, state.fewDaysForecast)); 

	return (
		<div className='DaysForecast'>
			{ state.fewDaysForecast.length > 0 &&
			  state.fewDaysForecast.map((dayForecast) => {
				return <Day 
					forecast={dayForecast} setDayForecast={setDayForecast}
					key={dayForecast.date} isCurrentDay={true}
				/>
			})}
		</div>
	)
}

export default Days;