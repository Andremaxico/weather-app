
export const initialState = {
	fewDaysForecast: null,
	cityName: '',
	isFetching: false,
	currentDayForecast: null,
	currentWeather: null,
	networkError: '',
}

export const SET_FIVE_DAYS_FORECAST = 'SET_FIVE_DAYS_FORECAST';
export const SET_CITY_NAME = 'SET_CITY_NAME';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const SET_CURRENT_DAY_FORECAST = 'SET_CURRENT_DAY_FORECAST';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_NETWORK_ERROR = 'SET_NETWORK_ERROR';

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIVE_DAYS_FORECAST:
			return {...state, fewDaysForecast: action.forecast};
		case SET_CITY_NAME:
			return {...state, cityName: action.cityName}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.value}
		case SET_CURRENT_DAY_FORECAST:
			return {...state, currentDayForecast: action.forecast}
		case SET_CURRENT_WEATHER:
			return {...state, currentWeather: action.weatherData }
		case SET_NETWORK_ERROR:
			console.log('set network error', action.errorMessage);
			return {...state, networkError: action.errorMessage}
		default:
			return state;
	}
}

export const setCityName = (cityName) => ({type: SET_CITY_NAME, cityName});
export const fetchForecastSuccess = (forecast) => ({type: SET_FIVE_DAYS_FORECAST, forecast});
export const toggleIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value});
export const setCurrentDayForecast = (forecast) => ({type: SET_CURRENT_DAY_FORECAST, forecast})
export const setCurrentWeather = (weatherData) => ({type: SET_CURRENT_WEATHER, weatherData});
export const setNetworkError = (errorMessage) => ({type: SET_NETWORK_ERROR, errorMessage})

export default weatherReducer;