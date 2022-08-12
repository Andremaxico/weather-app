import { weatherAPI } from "../api";
import { getDate } from "../helpers/dateParse";
import { fetchForecastSuccess, SET_FIVE_DAYS_FORECAST, toggleIsFetching } from "../Reducers/weather-reducer"

export const getFiveDaysForecast = (cityName) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const [coords] = await weatherAPI.getCoords(cityName);
	const weatherData = await weatherAPI.getResponse(coords.lat, coords.lon);

	//yyyy-mm-dd
	let dates = [];
	//{hour: {}}
	let days = [];

	//[40: {}] -> {5: date:{}}
	for(let i = 0; i < weatherData.list.length; i++) {
		const currData = weatherData.list[i];
		const date = getDate(currData.dt_txt);
		if(!dates.includes(date)) {
			const currDay = weatherData.list.filter((data) => getDate(data.dt_txt) === date);
			days.push(currDay);
			dates.push(date);
		}
	}
	dispatch(fetchForecastSuccess(days));
	dispatch(toggleIsFetching(false));
}