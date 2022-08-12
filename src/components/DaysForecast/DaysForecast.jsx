import React, { useEffect } from 'react';
import weatherReducer, { initialState } from '../../Reducers/weather-reducer';
import { getFiveDaysForecast } from '../../Thunks/weatherThunks';
import useThunk from '../../utils/useThunk';
import Day from './Day';
import './DaysForecast.scss';

const Days = ({cityName}) => {
	const [state, dispatch] = useThunk(weatherReducer, initialState);

	useEffect(() => {
		dispatch( getFiveDaysForecast(cityName) );
	}, [cityName]);
	
	return (
		<div className='DaysForecast'>
			{ state.fiveDaysForecast.length > 0 &&
			  state.fiveDaysForecast.map((dayForecast) => {
				return <Day forecast={dayForecast} key={dayForecast[0].dt}/>
			})}
		</div>
	)
}

export default Days;