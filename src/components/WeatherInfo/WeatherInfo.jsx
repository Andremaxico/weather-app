import React, { useEffect, useState, useReducer } from 'react';
import './WeatherInfo.scss';
import { kphToMps } from '../../helpers/converters';
import { getCurrentHour, getHour } from '../../helpers/dateParse';
import HourForecast from './HourForecast';
import getClosest, { comparator1, comparator2 } from '../../helpers/getClosest';
import withNetworkCheck from '../../hocs/withNetworkCheck';

const WeatherInfo = ({currentDayForecast}) => {
	const forecast = currentDayForecast.hoursForecast;
	let hoursArr = [];
	for (let i = 0; i < forecast.length; i++) {
		const hour = forecast[i];
		hoursArr.push(getHour(hour.time).slice(0, 2));
	}
	const settings = {
		arr: hoursArr,
		valueToFind: getCurrentHour(),
		comparator: comparator1
	};
	const closestHour = getClosest(settings);
	
	return (
		<div className='WeatherInfo'>
			{forecast.map(hourForecast => <HourForecast closestHour={closestHour} key={hourForecast.time} hourForecast={hourForecast}/>)}
		</div>
	)
}

export default withNetworkCheck(WeatherInfo);
