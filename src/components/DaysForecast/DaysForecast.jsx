import React, { useEffect } from 'react';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getCurrentDayForecast, getFewDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import Day from './Day';
import './DaysForecast.scss';

const Days = ({fewDaysForecast}) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	const setDayForecast = (date) => dispatch(getCurrentDayForecast(date, fewDaysForecast)); 

	return (
		<div className='DaysForecast'>
			{ fewDaysForecast.length > 0 &&
			  fewDaysForecast.map((dayForecast) => {
				return <Day 
					forecast={dayForecast} setDayForecast={setDayForecast}
					key={dayForecast.date} currentDayForecast={state.currentDayForecast}
				/>
			})}
		</div>
	)
}

export default Days;