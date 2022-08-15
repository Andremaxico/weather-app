import React, { useEffect } from 'react';
import { getChangedDate, getDateFrom } from '../../helpers/dateParse';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getCurrentDayForecast, getFewDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Day from './Day';
import './DaysForecast.scss';

const Days = ({fewDaysForecast, setDayForecast, currentDayForecast, currentWeather}) => {
	const currDate = new Date(currentDayForecast.date);
	const nextDate = new Date(getChangedDate(currDate));
	const prevDate = new Date(getChangedDate(currDate, false));
	const daysToShow = fewDaysForecast.filter(({date}) => {
		const timestamp = new Date(date).getTime();
		const nextTimestamp = nextDate.getTime();
		const prevTimestamp = prevDate.getTime();
		
		return prevTimestamp <= timestamp && timestamp <= nextTimestamp;
	})

	return (
		<div className='DaysForecast'>
			<CurrentWeather weather={currentWeather} />
			{ daysToShow.length > 0 &&
			  daysToShow.map((dayForecast) => {
				return <Day 
					forecast={dayForecast} setDayForecast={setDayForecast}
					key={dayForecast.date} currentDayForecast={currentDayForecast}
				/>
			})}
		</div>
	)
}

export default Days;