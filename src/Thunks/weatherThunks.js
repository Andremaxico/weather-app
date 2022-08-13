import { weatherAPI } from "../api";
import { getDate } from "../helpers/dateParse";
import { fetchForecastSuccess, setCurrentDayForecast, toggleIsFetching } from "../Reducers/weather-reducer"

export const getCurrentDayForecast = (date, forecast) => async (dispatch) => {
	const [dayForecast] = forecast.filter(currDay => currDay.date === date);
	console.log(dayForecast);
	const hoursForecast = dayForecast.hour.filter((hour, index) => index / 3 % 1 === 0);
	dispatch(setCurrentDayForecast(hoursForecast));
}

export const getFewDaysForecast = (coords) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const weatherData = await weatherAPI.getForecast(coords, 5);
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
	//manacha, dispatch doesn't works
	getCurrentDayForecast(todayDate, weatherData.forecast.forecastday)(dispatch);
	dispatch(toggleIsFetching(false));
}
