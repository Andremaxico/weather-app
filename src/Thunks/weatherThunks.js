import { weatherAPI } from "../api";
import { getDate, getHour } from "../helpers/dateParse";
import { fetchForecastSuccess, setCurrentDayForecast, setCurrentWeather, toggleIsFetching } from "../Reducers/weather-reducer"

export const getCurrentDayForecast = (date, forecast) => async (dispatch) => {
	const [dayForecast] = forecast.filter(currDay => currDay.date === date);
	console.log(dayForecast);
	const hoursForecast = dayForecast.hour.filter((forecast, index) => {
		const hour = getHour(forecast.time).slice(0, 2);
		if(hour < 6) {
			return index / 3 % 1 === 0
		} else if (hour > 6) {
			return index / 2 % 1 === 0
		}
	});
	dispatch(setCurrentDayForecast({date, hoursForecast}));
}

export const getFewDaysForecast = (coords) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const weatherData = await weatherAPI.getForecast(coords, 5);
	window.data = weatherData;
	/*//yyyy-mm-dd
	let dates = [];
	//{hour: {}}
	let days = [];

	//[40: {}] -> {5: date:{}}
	for(let i = 0; i < weatherData.forecast.forecastday; i++) {
		const currData = weatherData.forecast.forecastday[i];
		const date = getDate(currData.dt_txt);
		if(!dates.includes(date)) {
			const currDay = weatherData.list.filter((data) => getDate(data.dt_txt) === date);
			days.push(currDay);
			dates.push(date);
		}
	}*/
	const todayDate = new Date().toLocaleDateString().split('.').reverse().join('-');
	dispatch(fetchForecastSuccess(weatherData.forecast.forecastday));
	dispatch(setCurrentWeather(weatherData.current));
	//manacha, dispatch doesn't works
	getCurrentDayForecast(todayDate, weatherData.forecast.forecastday)(dispatch);
	dispatch(toggleIsFetching(false));
}
